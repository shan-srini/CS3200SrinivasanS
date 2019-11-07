import pandas as pd
import requests
from lxml import html
from time import sleep

##############################################################################
# This is my first Python code ever, excuse the poor style!
# Purpose statements of functions have been added and code is annotated as much as possible!
##############################################################################


##############################################################################
# How to use pandas to hit an url and grab the table from it into a dataframe

# url = 'https://www.pro-football-reference.com/years/2018/fantasy.htm'
# urlHitTable = pd.read_html(url)[0]

# df now holds an unformatted DataFrame holding information from the first
# table (represented by [0])  
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


### Player IDS dictionary
playerIdsDict = {}

# executes getPlayerIds function for years from startYear to endYear arguments
def executeGetPlayerIds(startYear, endYear):
    while (startYear <= endYear):
        playerIdsDict[startYear] = getPlayerIds(startYear)
        startYear+=1


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


# Executes executeGetPlayerIds. playerIdsDict will contain lists of ids from years
# specified in this call below after this function is executed
executeGetPlayerIds(2018, 2019)

# Unique playerIdList from years specified in executeGetPlayerIds call above
finalPlayerIdList = makePlayerUnique()
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
    while i < 339:
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
        if i%10 == 0:
            sleep(3)
    return players_info

playerInfoTable = getPlayer()
##############################################################################
    

##############################################################################
# Get DataFrame of Team - schema attributes to scrape are
# team_name, current_head_coach, division, 



##############################################################################
"""
year = 2018
i = 0
while i < 3: #len(player_ids):
#Create url of gamelog page given current player id
urlToHit = baseLink + player_ids[i] + '/gamelog/' + str(year) + '/'
#Inserting dataframe of current player into 2018 stats 
player_stat_2018.append(pd.read_html(urlToHit)[0])
player_stat_2018[i].insert(0, "player_id", player_ids[i])
i += 1
"""

# To export DataFrame to csv
# playerInfo2018.to_csv('/Users/shanmukha/Documents/CS3200/FootballProject/exportTest.csv', index = None)