import pandas as pd
import requests
from lxml import html
from time import sleep

##############################################################################
# This is my first Python code ever, excuse the poor style!
# Purpose statements of functions have been added and code is annotated as much as possible!
##############################################################################

# Global Variables
baseLink = 'https://www.pro-football-reference.com'


##############################################################################
# Get the playerIds for a given year
def getPlayerIds(year):
    ## This page has a table of top fantasy players for the given year
    ## This essentially means all relevant players are listed on this page
    topPlayersHTML = requests.get(baseLink + '/years/' + str(year) + '/fantasy.htm')
    
    # Use XPath and get list of hrefs which contain the id in it
    tree = html.fromstring(topPlayersHTML.content)
    player_ids = tree.xpath("//table[@id='fantasy']/tbody/tr/td[@data-stat='player']/a/@href")
    # map through list to remove .htm from end of href
    # lambda is just for substring
    player_ids = list(map(lambda x: x[:-4], player_ids))
    #Trimming list to only top 250 players, to limit crawling later
    player_ids = player_ids[0:250]

    return player_ids


# executes getPlayerIds function for years from startYear to endYear arguments
def executeGetPlayerIds(startYear, endYear):
    playerIdsDict = {}
    while (startYear <= endYear):
        playerIdsDict[startYear] = getPlayerIds(startYear)
        startYear+=1
    return playerIdsDict

# A function to return a unique array of player ids from the dictionary of playerIds
def makePlayerUnique():
    toReturn = []
    for array in playerIdsDict.values():
        for playerID in array:
            if playerID in toReturn:
                continue
            else:
                toReturn.append(playerID)
    return toReturn
##############################################################################

    
##############################################################################
# Get DataFrame of Offensive Player - schema attributes are
# player id, player_name, player_position, current_team, height, weight
def getPlayer():
    players_info_start = {'player_id': [],
                          'player_name': [],
                          'player_position': [],
                          'current_team': [],
                          'player_height': [],
                          'player_weight': []}
    players_info = pd.DataFrame(players_info_start)
    #for player_id in finalPlayerIdList:
    #replace all instances of player_ids[i] in loop below when ready to execute all players crawl
    i = 0
    while i < 7:
        #Create url of player page given current player id
        urlToHit = baseLink + finalPlayerIdList[i] + '.htm'
        playerPageHTML = requests.get(urlToHit)
        tree = html.fromstring(playerPageHTML.content)
        data = {'player_id': finalPlayerIdList[i],
                'player_name': tree.xpath('//*[@id="meta"]//h1[@itemprop = "name"]/text()'),
                'player_position': tree.xpath('substring(//*[@id="info"]//strong[text()="Position"]/../text()[2], "3", "2")'),
                'current_team': tree.xpath('concat(//*[@id="info"]//*[@itemprop="affiliation"]/a/text(), "")'),
                'player_height': tree.xpath('//*[@id="info"]//*[@itemprop="height"]/text()'),
                'player_weight': tree.xpath('//*[@id="info"]//*[@itemprop="weight"]/text()')} 
        players_info = players_info.append(pd.DataFrame(data))
        i+=1
        #sleep for a few seconds to avoid overloading
        sleep(1)
    return players_info
##############################################################################


##############################################################################
# Get Table of Team - schema attributes to scrape are
# team_name, current_head_coach, division, 

teamList = ['/teams/nwe', '/teams/car']

### Team Dict, key is year(season), value is teamID    
teamDict = {}

def initTeamDict(startYear, endYear):
    while startYear <= endYear:
        teamDict[startYear] = teamList
        startYear+=1
        

def getTeamTable():
    teams_info_start = {'team_name': [],
                        'season': [],
                        'current_head_coach': [],
                        'division': [],
                        'record': [],
                        'curr_offensive_coordinator': [],
                        'curr_defensive_coordinator': []}
    team_info_toReturn = pd.DataFrame(teams_info_start)
    for year in teamDict:
        for team in teamDict[year]:
            urlToHit = baseLink + team + '/' + str(year) + '.htm'
            teamPageHTML = requests.get(urlToHit)
            tree = html.fromstring(teamPageHTML.content)
            data = {'team_name': tree.xpath('//*[@id="info"]//*[@itemprop="name"]/span[2]/text()'),
                        'season': year,
                        'current_head_coach': tree.xpath('//*[@id="info"]//*//*//strong[text()="Coach:"]//../a/text()'),
                        'division': tree.xpath('//*[@id="info"]//*[text()="Record:"]//../a[1]/text()'),
                        'record': tree.xpath('substring(//*[@id="info"]//*[text()="Record:"]/../text()[2], "2", "7")'),
                        'curr_offensive_coordinator': tree.xpath('concat(//*[@id="info"]//*//*//strong[text()="Offensive Coordinator:"]//../a/text(), "")'),
                        'curr_defensive_coordinator': tree.xpath('concat(//*[@id="info"]//*//*//strong[text()="Defensive Coordinator:"]//../a/text(), "")')}
            team_info_toReturn = team_info_toReturn.append(pd.DataFrame(data))
            #sleep for a few seconds to avoid overloading
            sleep(1)
    return team_info_toReturn
##############################################################################
    

##############################################################################
# Get Table of Offensive statistics & inherently fulfill Games schema

### Gets the statistic Table - Weak Entity table between Player and Game
def getStatisticTable():
    toReturn = pd.DataFrame(
            )
    # Delete maxp and i after, just for testing
    maxp = 300
    i = 0
    for year in playerIdsDict:
        for playerId in playerIdsDict[year]:
                urlToHit = baseLink + playerId + '/gamelog/' + str(year) + '/'
                statisticTable = pd.read_html(urlToHit)[0]
                statisticTable.insert(0, "player_id", playerId)
                toReturn = pd.concat([toReturn, statisticTable])
                sleep(2) #(150 * 1second * 2) / 60   mins total time for this
                # Delete this code after, it is just for testing
                i+=1
                print(i)
                print(playerId)
                if i >= maxp:
                    return toReturn
    return toReturn
##############################################################################
# Execution - main, Python doesn't have a main method? This is a collection of
# All method calls
    
# Executes executeGetPlayerIds. playerIdsDict will contain lists of ids from years
# specified in this call below after this function is executed
#playerIdsDict = executeGetPlayerIds(2018, 2019)

# Unique playerIdList from years specified in executeGetPlayerIds call above
#finalPlayerIdList = makePlayerUnique()

# Get the playerTable using finalPlayerIdList
# playerInfoTable = getPlayer()

### initTeamDict(int startYear, int endYear INCLUSIVE)
### Start at the first szn to eventually get teamInfo about
#initTeamDict(2018, 2019)

### call gets the Team Table
#teamTable = getTeamTable()

# Gets the weak entity Statistic Table and inherently enough info for Game Table as well
statisticTable = getStatisticTable()
##############################################################################

# To export DataFrame to csv
# playerInfoTable.to_csv('/Users/shanmukha/Documents/CS3200/FootballProject/playerInfoTable.csv', index = None)
# teamTable.to_csv('/Users/shanmukha/Documents/CS3200/FootballProject/teamTable.csv', index = None)
# statisticTable.to_csv('/Users/shanmukha/Documents/CS3200/FootballProject/statisticTable2.csv', index = None)
 
    

##############################################################################
# Note to self: How to use pandas to hit an url and grab the table from it into a dataframe

# url = 'https://www.pro-football-reference.com/years/2018/fantasy.htm'
# urlHitTable = pd.read_html(url)[0]

# df now holds an unformatted DataFrame holding information from the first
# table (represented by [0])

# Also xpath method used in getPlayer() & getTeamTable()  
##############################################################################
