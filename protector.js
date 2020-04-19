// version #: 0.96
alert(9);
try {
    function isLP() {
        var version = 0.96,
			REASON_GENERAL = 1, REASON_DOMAIN = 2, REASON_TITLE = 3, REASON_URL = 4, REASON_CHROMESTOREID = 5, REASON_LINKELEMENT_DOMAIN = 6, REASON_SCRIPTELEMENT_DOMAIN = 7, REASON_SCRIPTELEMENT_URL = 8, REASON_DOMELEMENTS = 9, REASON_PHRASECOMBO = 10, REASON_GLOBALVARSSET = 11, REASON_QUERYSTRING = 12, REASON_BASETAG = 13, REASON_SEARCHCHROMEEXT = 14, REASON_EXACTURL = 15,
			whitelist = ["google", "bing", "yahoo", "ask.com", "aol.com", "baidu.com", "wolframalpha.com", "duckduckgo.com", "ecosia.org", "apple.com", "yandex.ru", "youtube.com", "facebook.com", "twitter.com", "qq.com", "wikipedia", "live.com", "macworld.com", "tomsguide.com", "adobe.com", "symantec.com", "dailymotion.com", "naver.jp", "naver.com", "gopher.com", "searchnow.com", "mozilla.org", "mac-help.com", "daum.net", "yelp.com", "microsoft.com", "chromium.org", "flickr.com", "foxnews.com", "reference.com", "justanswer.com", "makeuseof.com", "superuser.com", "cnet.com", "office.com", "abcmouse.com", "googleblog.com", "xfinity.com", "lifehacker.com", "ultimate-guitar.com", "businessinsider.com", "wikihow.com", "ca.gox", "arstechnica.com", "oath.com", "stackoverflow.com", "github.com", "web.de", "apfeltalk.de", "msn.com", "canoe.ca", "shopping.net", "applesfera.com", "thenextweb.com", "shutterstock.com", "cnetfrance.fr", "delta.com", "metacrawler.com", "chip.de", "dogpile.com", "pcrisk.com", "chromeplugins.org", "cnn.com", "quora.com", "macworld.se", "super-resume.com", "tistory.com", "zendesk.com", "bandcamp.com", "malwarebytes.com", "webcrawler.com", "vforum.vn", "taimienphi.vn", "pantip.com", "medium.com", "onthehub.com", "appleinsider.com", "augie.edu", "etsy.com", "pinterest.com", "icloud.com", "archive.li", "macrumors.com", "qwant.com", "edicomgroup.com", "postgresql-archive.org", "macg.co", "filmfanatic.org", "info.com", "atlassian.net", "zenya.com", "feng.com", "cchmc.org"],
			exactURLs = ["playtiment.com/new-tab/pusheen", "speedtest-guide.com/speedtest/newtab.html", "topspeedmotors.co/new-tab/hypercars", "preciousbible.com/bible/newtab.html", "hades-kun.github.io/Startpage", "convertersuite.com/pdfconverter/newtab.html", "webgameapp.com/extensionsgame/highwaymotorcycle/newtab", "funnytabs.co/new-tab/funnyquotes", "zillakgames.com/extensions/trafficracing/newtab", "sportsfantab.com/new-tab/manchestercity", "webgameapp.com/extensions/metalgearsolidvgroundzeroes/newtab", "zillakgames.com/extensions/trafficracergame3d/newtab", "astrologycraft.com/horoscope/newtab.html", "sportsfantab.com/new-tab/neworleanssaints", "wallpaper.net.in/en/carsv3"],
			domains = ["convertallfiles.com", "prontovideoconverter.com", "zipraronline.com", "archivemanager.net", "downloadspeedtester.com", "giantsender.com", "mapsonlinepro.com", "pdftoolkit.net", "doctopdfonline.com", "myvideotab.com", "video-browse.com", "surfadmin.com", "welcomebrowser.tech", "zildon.pw", "weatherblink.com", "internetspeedtracker.com", "atozmanuals.com", "filmfanatic.com", "packagetracer.com", "fulltab.com", "fulltabsearch.com", "getmediaplus.com", "luckypdfconverter.com", "renewitnow.co", "goamuze.com", "tvplusnewtab.com", "fromdoctopdf.com", "lab.kaizenet.com", "downloadconverternow.com", "pdfmac.com", "vixplayer.com", "watchtvnow.co", "ngmacplayer.com", "vlc-player-download.com", "dwnlflash.com", "funsafetab.com", "funsafetabsearch.com", "medianewpage.com", "medianewpagesearch.com", "socialnewpages.com", "socialnewpagessearch.com", "quadplayernow.com", "startstreaming.net", "autopdfbox.com", "playzonenow.com", "pushmobilenews.com", "trustnav.com", "softasm.com", "gowatchfreemovies.to", "a2zcrack.com", "cmacapps.com", "minecraft-forum.net", "getdoctopdf.com", "blpmovies.com", "supportfix.tech", "powerfulappz.com", "yourtemplatefinder.com", "easypdfcombine.com", "myappzcenter.com", "iezbrowsing.com", "easyspeedtest.co", "heasyspeedtest.co", "extensionsnewtab.com", "indexerprocess.com", "handmademac.com", "playmediacenter.com", "myutilitybox.co", "superappbox.com", "pdf-convert.co", "yourfreeforms.com", "myway.com", "videodownloadconverter.com", "pdfconverter.pro", "yourmainsource2content.download", "nd7v1tgqm9.com", "radiorage.com", "searchfortplus.com", "mytopappz.com", "mystartab.com", "macbook-fix.com", "translationbuddy.com", "yourmapsnow.com", "elementaryhelper.com", "defaulttransaction.com", "rotatorinternet.com", "hdirectionsandmap.com", "streamit-online.com", "hinstantnewsnow.co", "searchgmfs1.com", "indexerengine.com", "hpackageintransit.com", "clearalgorithm.com", "assistiveadmins.com", "hemailloginnow.com", "scalablelauncher.com", "srchmgro.com", "onlineformfinder.com", "htheweathercenter.co", "hlocalclassifiedlist.com", "easyweatheralert.com", "searchjstg.com", "hgomaps.co", "easymapsaccess.com", "hyourfastemailnow.com", "hmyquickconverter.com", "agentindexer.com", "schedulerengine.com", "exploretask.com", "pinkcablecharge.com", "modeprotocol.com", "srchmgrds.com", "pdfconverttools.com", "pdfconverterhq.com", "yourpackagesnow.com", "biggamecountdown.com", "searchrs.com", "mapsgalaxy.com", "prs458trz.com", "operativecontrol.com", "fastdoctopdf.com", "searchipdf.com", "newtab-tv.com", "quicktemplatefinder.com", "hmapsanddirections.co", "howtosimplified.com", "hemailaccessonline.com", "flightsearchapp.com", "easyemailsuite.com", "thegamesearcher.com", "getformsonline.com", "hlocalweatherradar.co", "searchddn.com", "skyhandler.com", "downloadmyemailhub.com", "funpopulargames.com", "myquickconverter.com", "searchptp.com", "defaultinterface.com", "hfreeliveradio.co", "infinitynewtab.com", "mycalendarplanner.com", "getsearchnow1.com", "lokaleswetter.com", "mytransitplanner.com", "searchjsmtmp.com", "mysocialshortcut.com", "launcherenumerator.com", "inethandler.com", "inetindex.com", "hdtasks.com", "filterexplorer.com", "configindexer.com", "trackpackagehome.com", "operativealgorithm.com", "starttab.co", "mpnrs.com", "searchcl.com", "myimageconverter.com", "myformsfinder.com", "dictionaryboss.com", "hyourweatherinfonow.com", "projectconfig.com", "directionsandmap.com", "everydaylookup.com", "dynamicalgorithm.com", "searchmgr.com", "dsearchm3f2.com", "assistiveprocesser.com", "directionsace.com", "getmyapp1.com", "hyourpdfconverternow.com", "searchws.com", "searchffr.com", "headlinealley.com", "emailfanatic.com", "hfastpackagetracker.co", "elementarybalance.com", "activeindexer.com", "bitindexer.com", "couponsimplified.com", "hmynewswire.co", "searchm3w1.com", "couponxplorer.com", "packagetracking.net", "mytransitguide.com", "365-stream.com", "mytemplates.co", "audiotoaudio.com", "dsearchm3p2.com", "schedulerproject.com", "searchm3p1.com", "partitioncache.com", "mackeeper.com", "getsportfanatics.com", "zipmac.com", "macbooster.net", "filtertasks.com", "apple.ixonews.com", "quickemailaccess.co", "hymnofthemac.com", "com-macs.com", "emailanytime.co", "onlinemapfinder.com", "propdfconverter.com", "searchvfr.com", "apple.com-macs.com", "quickpdfmerger.com", "packageintransit.com", "htrackyourflight.co", "filmsofficial.com", "cryptopricesearch.com", "viewfreerecipes.com", "hloginnow.net", "newtab-media.com", "elementaryindexer.com", "startmoji.com", "htrackyourpackages.co", "searchlttrnow.com", "searchglnn.com", "babynameready.com", "launcherapplication.com", "applyfix.tech", "comcheck.online", "packageho.me", "machalos.com", "mywebface.com", "thewhizmarketing.com", "videodownloadconverter.org", "searchedd.com", "indexeroptimization.com", "passwordlogic.com", "transitsimplified.com", "totalrecipesearch.com", "upgradetasks.com", "puzzlegamesdaily.com", "schedulerdata.com", "com-download.software", "microanalyser.com", "triple-our-prize41.loan", "easypackagetracker.com", "shoppingdealslive.com", "mac-help.com", "myeasylotto.com", "newtabtv.com", "dailylocalguide.com", "obtenezemail.com", "taxcenternow.com", "utilitooltech.com", "onlineroutefinder.com", "myemailcenter.co", "apple-protection.com-tool.online", "managerremote.com", "getflightinfo.com", "discoverancestry.com", "trackapackage.net", "hgomapsandirections.com", "indexerrotator.com", "ultraorigin.com", "winapplication.com", "searchlson.com", "getmyapp2.com", "gostudyhq.com", "getmacsoft.com", "webenumerator.com", "internetspeedradar.com", "assistiveinput.com", "getpoliticalnews.com", "ultralocator.com", "scalableenumerator.com", "myfileconvert.com", "ontargetyoga.com", "formatassist.com", "easyfileconvert.com", "srchsports.com", "downloadmyinboxhelper.com", "emailaccessonline.com", "defaulttasks.com", "yourweatherinfonow.com", "macdamaged.tech", "downloadrecipesearch.com", "indexerperf.com", "inputbrowser.com", "fastermac.tech", "configpage.com", "puhfjt.xyz", "launcheradmin.com", "formfinderfree.com", "searchlyee2.com", "getseekappz1.com", "presidentialbuzz.com", "classifiedseasy.com", "freeformsnow.com", "calendarspark.com", "anytimeastrology.com", "onlinemapsearch.com", "streamfrenzy.com", "yournewtab.com", "televisionfanatic.com", "hwatchsportslive.co", "indexerlaunch.com", "com-macx.com", "lookupadmins.com", "syncedresults.com", "hplayfreemusic.co", "interopadmins.com", "launchoptimization.com", "incognitosearches.com", "instantradioplay.com", "nanoprocesser.com", "directionsbuilder.com", "seven-our-prize24.loan", "interophandler.com", "everydaymemo.com", "filesendsuite.com", "productivityboss.com", "indexerportal.com", "hgetinstantrecipes2.com", "winenumerator.com", "packagesear.ch", "securefastmac.club", "powerfulspeeds.com", "hconvert2pdfnow.com", "letmegofaster.ltd", "searchwwf.com", "hmyclassifiedshomepage.com", "myclassifiedshomepage.com", "freeliveradio.co", "commonhandler.com", "gamingwonderland.com", "combo-search.com", "mobile5990.seven-our-prize78.loan", "100sofrecipes.com", "findmefreebies.com", "convertersnow.com", "filteroptimization.com", "searchtmpn.com", "downspeedtest.com", "htransitschedule.co", "launcherindex.com", "dailyrecipeguide.com", "pconverter.com", "findformsfast.com", "supercouponpro.com", "assistiveexplorer.com", "easyhomedecorating.com", "mywaynotes.com", "theweathercenter.co", "gomaps.co", "searchsassist.com", "yourtransitinfonow.com", "mydigitalcalendar.com", "essentialhandler.com", "trackmyflight.co", "secureandfast.tech", "srchmgrd.com", "freemanualsindex.com", "notehomepage.com", "searchwfc.com", "onlineworksuite.com", "exploredisplay.com", "searchmorr.com", "maccleaner.net", "doctopdf.io", "speedomizer.com", "mystart.com", "supportx.ml", "quickweathertracker.com", "hdoptimization.com", "freeradiocast.com", "emailassistant.co", "emaileasyaccess.com", "fastspeedtestnow.com", "drivingdirectionshome.org", "searchlf.com", "macs.ga", "worldofnotes.com", "mynewsguide.com", "smartdataformat.com", "easyfileconverter.com", "searchemaila.com", "searchformsonline.com", "exploretransaction.com", "mergedocsonline.com", "cryptoverto.com", "unsplash.com", "getplaynsearch3.com", "4newtab.com", "getapps3.com", "balanceddisplay.com", "macx.ga", "bringmesports.com", "inetadmins.com", "upgradecache.com", "trackoptimization.com", "mapmytravel1.co", "email-access.co", "com-mac-support.com", "assistiveoptimization.com", "syncedhelper.com", "searchjsmmp.com", "searchpluspro.com", "assistivetasks.com", "rotatorapps.com", "quickmapsaccess.com", "macx.ml", "quickphotoedit.com", "quickformfinder.com", "filesharefanatic.com", "searchwos.com", "lbneov.xyz", "hmyonlinecalendar.co", "holidayphotoedit.com", "moviesfanatic.com", "finddirections.co", "webmailworld.com", "macxs.ga", "updateadmins.com", "inetoptimization.com", "rotatorresults.com", "macxs.cf", "launcherexplorer.com", "everydaymanuals.com", "g_tvsport.myhitapps1.online", "searchfdm.com", "macxs.ml", "fastformfinder.com", "mytelevisionhq.com", "quickmapsanddirections.com", "interopapplication.com", "heasymapsaccess2.com", "rotatoradmins.com", "howtosuite.com", "updateenumerator.com", "lookuphandler.com", "medialink.mobi", "directionsandmapstab.com", "syncedinternet.com", "findyourmaps.com", "easyemailaccess.com", "hquickmapsanddirections.com", "indexerinterop.com", "searcheasyplus.com", "inboxace.com", "getdirectionsquick.org", "localweatherradar.co", "originalityofmac.com", "easyphotoedit.com", "internetspeedutility.net", "configmemory.com", "hyourmapview.com", "getplaynsearch1.com", "syncedexplorer.com", "searchwytsn.com", "balancedsample.com", "syncedapplication.com", "moviesearchtoday.com", "privateebusiness.com", "upgradeexplorer.com", "hdlocator.com", "assistivemaster.com", "universalconverter.co", "commoninterfaces.com", "myhitapps1.online", "impressivenature.com", "paidforrecom", "searchfacoupons.com", "checkmyspeednow.com", "quickflighttracker.com", "searchleasy.com", "hinstantlyconverter.com", "promo2click.com", "hdopplerweatherradar.co", "freeaddon.com", "searchtpg.com", "freelocalweather.com", "mynewswire.co", "cleaning-sa.com", "easydirectionsfinder.com", "macxs.tk", "hmymapshomepage.com", "weatherradarforecast.co", "mymapsexpress.com", "searchtp.com", "inetbrowser.com", "productmanualsfinder.com", "theappsuniverse.com", "maxsc.ml", "nanoformats.com", "watchtvinstantly.co", "srchmgrl.com", "miacaselladiposta.com", "rotatormanager.com", "searchplusnow.com", "hmyconverterhub.com", "dailybibleguide.com", "flexibleformats.com", "hofficeworksuite.com", "searchipdf2.com", "findweathernow.com", "getfreegifs.com", "controlformats.com", "essentialinterfaces.com", "getmymapstab.com", "logfunction.com", "searchfff.com", "hinstantlyconverter2.com", "mapsanddrivingdirection.com", "elementarydev.com", "myradioaccess.com", "24-stream.com", "searchwtii.com", "maxsc.ga", "myspeedtester.co", "assistivewindows.com", "coolstart.com", "operativeengine.com", "searchptp2.com", "activecouponsexplore.com", "simplepictureedit.com", "recognitionservice.com", "configaccess.com", "checkmyspeed.co", "filterapplication.com", "bsbrowsing.com", "navigatememory.com", "hthereadinghub.com", "elementarybuffer.com", "maxsc.tk", "freepdfcombiner.com", "essentialinput.com", "brandthunder.com", "searchflm.com", "htv-now.co", "crazyforcrafts.com", "searchgddd.com", "searchfstn2.com", "navigatenetworks.com", "gosearchtab.com", "weatherradarforecaster.com", "convertdocsonline.com", "searchssmart.com", "discoverliveradio.com", "heasyconverter.co", "gamingassassin.com", "hyourtelevisionnow.com", "funcustomcreations.com", "myconverterhub.com", "loginterfaces.com", "downloadinboxnow.com", "sportsbookvip.com", "searchtsbn.com", "flexiblebuffer.com", "rotatorhandler.com", "commoninput.com", "convertpdfsnow.com", "createdocsonline.com", "checkweathertoday.com", "jangoram.com", "interopenumerator.com", "searchcpro1.com", "justmineit.com", "heasytofindforms2.com", "hfindmapsnow.com", "freedirectionsonline.com", "rotatorprocess.com", "essentialbuffer.com", "elementaryinterfaces.com", "searchjstf.com", "shopathome.com", "ltvperf.com", "myscrapnook.com", "pochtavoytint.com", "srchmgrp.com", "configremote.com", "bettercareersearch.com", "gardeningenthusiast.com", "thewhizproducts.com", "searchmangrf.com", "rotatorlocator.com", "getsportscore.com", "flexiblesample.com", "accessibilityindexer.com", "stream-all.com", "findinterfaces.com", "leadingbuffer.com", "downloadmanagernow.com", "easydocmerge.com", "searchtmpn4.com", "trackyourpackages.co", "easyconverter.co", "searchgdd.com", "unzippy.com", "indexerlauncher.com", "1bcde.com", "thereadinghub.com", "easytelevisionaccessnow.com", "searchlff.com", "totiteck.com", "macsecurity.network", "masterinitiators.com", "algorithminternet.com", "browseprocesser.com", "findalgorithm.com", "publicfrequency.com", "discoveryanalyser.com", "hmylocaltransit.co", "hnotepadpro.co", "syncedcharacter.com", "portalinitiators.com", "mapmywayfree.com", "readingfanatic.com", "heasyphotoeditor.co", "hfastmapfinder.com", "masterorigin.com", "macz.ga", "networkprocesser.com", "navigatesample.com", "doctopdfofficial.com", "indexerflash.com", "searchucf.com", "searchtmp.com", "metroalgorithm.com", "browseinterface.com", "hmyweatherradar.co", "extfans.com", "accesoamicorreoelectronico.com", "hfindpackagesnow.com", "portalcoordinator.com", "configcache.com", "thedoctopdf.com", "fileconvertertab.com", "cbegnyqryvirelv.com", "macz.cf", "unclaimedcashfinder.com", "hfreeforms.co", "discovertransactions.com", "searchllw.com", "actionclassicgames.com", "marineaquariumfree.com", "primarybuffer.com", "northbet.ag", "loginemailnow.com", "publicinitiators.com", "portaltransactions.com", "mymapshomepage.com", "searchfaa.com", "searchlwr.com", "portalscheduler.com", "cleverbridge.com", "thetarzandance.com", "hyourpdfsconverternow.com", "radioranga.com", "zugriffemailnt.com", "sportaddons.com", "networkinitiators.com", "scalablesample.com", "searchumrz.com", "yourtelevisionnow.com", "virtualformats.com", "homenewtab.com", "publicalgorithm.com", "moviegoat.com", "ispeed.club", "metrofrequency.com", "searchjff.com", "indexeranalyser.com", "findprocesser.com", "searchfefc3.com", "browseadmin.com", "getappstrend1.net", "zugriffemail.com", "recipehub.com", "96.lt", "allinonedocs.com", "macz.gq", "hthebookhub.co", "syncedfrequency.com", "thecurrencyswitch.co", "commonbrowser.com", "betcris.mx", "binaryinitiators.com", "portalprotocols.com", "hgetsports.net", "gifsgalore.com", "searchm3p.com", "utilitychest.com", "hsimpleconverter.co", "balancedkey.com", "searchqpt.com", "drivingdirectionsgo.net", "easydirections.org", "searchhdrp.com", "metroanalyser.com", "myclassifiedsxp.com", "paidforresearch.com", "getspeedtracker.com", "hwatchingnewsonline.com", "indexerarchive.com", "searchdconvertnow.com", "binaryformats.com", "metroprocesser.com", "syncedanalyser.com", "browsefrequency.com", "syncedalgorithm.com", "analyserprotocols.com", "browsealgorithm.com", "astrologysearcher.com", "weatherforecasttracker1.com", "searchgtp.com", "discoveryprotocols.com", "projectbabyname.com", "hfastdirectionsfinder.com", "searchmypt.com", "searchetg.com", "syncedprocesser.com", "browseelemnt.com", "worldoftravel.co", "download-freemaps.com", "mysearch.com", "weather-genie.com", "yumrecipefinder.com", "searchgdbv.com", "syncedinterface.com", "getvmucho.com", "gifapalooza.com", "hlivetvnow.co", "agentadmins.com", "htrackmypackages.co", "formfetcherpro.com", "syncedadmin.com", "apple-support-scan.ml", "discoveryinitiators.com", "hclassifiedlist.net", "mymedianetnow.com", "searchallweb.com", "xclusive-offers.com", "assistivelaunch.com", "amazeappz.com", "browseanalyser.com", "hmyphotoeditor.co", "flexibleadmin.com", "easytofindforms.com", "easyrecipesnow.com", "discoveryprocesser.com", "packagetrackingpro.com", "frequencyprojects.com", "discoverycoordinator.com", "samplescheduler.com", "searchema.com", "youreasyemailsh.com", "getformsfree.com", "searchleasier.com", "htrackyourpackages.net", "heasyrecipesnow.com", "hthecalendar.co", "essentialprotocols.com", "searchtodaynr.com", "apple-support-scan.cf", "mapsear.ch", "fastdirectionsfinder.com", "spidersally.com", "logineasier.com", "streamingworldcup.com", "macboost.net", "hyourpackagetrackednow.com", "analyserbrowser.com", "synceddisplay.com", "filmsmaniasaga.com", "binarytransactions.com", "speeddial2.com", "basicformats.com", "apple-virus-removal.ml", "searchidd.com", "testonlinespeed.com", "searchm3w3.com", "searchmapquick.com", "searchlen.com", "alissoncorley.com", "elementarysample.com", "commonconfig.com", "algorithmsources.com", "smartmappers.com", "moviesearchcenter.com", "deluxsearch.com", "your24football.com", "searchgetdriving.com", "searchgst.com", "tvplusnewtabsearch.com", "syncedcontrol.com", "browsecharacter.com", "myfuncards.com", "smartpackagetracker.com", "analyserbuffer.com", "searchquicks.com", "findfreerecipes.com", "frequencyadmin.com", "searchmsd.com", "lightningnewtab.com", "accessibilityprojects.com", "dynamiccrush.com", "opticalbuffer.com", "searchfdf.com", "mytransitmapper.com", "quickpackagefinder.co", "algorithmbrowser.com", "leadingprotocols.com", "searchdirex.com", "searchws2.com", "apple-virus-removal.gq", "getyesappz1.com", "getmedianetnow.com", "frequencybrowser.com", "loginfaster.com", "majorbuffer.com", "apple-virus-removal.cf", "analyserdata.com", "onlyextremesports.com", "searchjsmem.com", "mysporttab.com", "directionsfinder.app", "hfindmyroute.co", "findmyroute.co", "appfindr.org", "lyricsbutler.com", "flexiblesources.com", "hyourfreeonlineforms.com", "lokaleswetternt.com", "flumeapp.com", "newtab.me", "essentialbrowser.com", "getcouponsfast.com", "thesimpleway.us", "searchlttrn.com", "mapsofficial.com", "srchmgra.com", "smsfrombrowser.com", "directionswhiz.com", "pochtavoyti.com", "pdf-maker.com", "wellnessmac.com", "trackerpackage.com", "slidingtabs.com", "streamingwheretv.net", "myfriendlyappz.com", "flexibleconfig.com", "partitionsources.com", "fightslowmac.com", "searchfefc2.com", "getapps1.com", "hquickdrivingdirections.com", "quickdrivingdirections.com", "hpackagetrackeronline.co", "searchjsfd.com", "hdesignyoursite.co", "mysearchplus.co", "536reto.com", "330sud24.com", "searchyffff.com", "yourfastemailnow.com", "searchwtvi2.com", "searchlfff.com", "ihateslowmac.com", "originbrowser.com", "alfarcenter.ru", "youremailnow.com", "searchwti.com", "searchgmfs.com", "searchlttrco.com", "heasytemplates.co", "click-now-on.me", "searchisemail.com", "hyourpdfsconverternow3.com", "platformbuffer.com", "buffersync.com", "windowservr.com", "essentialelemnt.com", "getwatchnowtab.com", "cleancharacter.com", "opticalconfig.com", "frequencysources.com", "getmapstab.com", "algorithmformats.com", "memoryconfig.com", "radiostreambutler.com", "browsemanuals.co", "goodtimesnt.com", "cool-tabs.com", "fasterlogin.net", "processertech.com", "quickpdfconvert.com", "downloadmacsoft.com", "easymapfinder.net", "searchquco.com", "searchappmovies.com", "filmsya.com", "easyziptab.com", "partitionbuffer.com", "dailybibleverses.co", "playstandard.com", "frequencyinternet.com", "shipmenttracker.co", "processeradmin.com", "sound-hd.com", "yogaposeonline.com", "musicdiscoverytab.com", "easy-pdf.com", "srchsportz.com", "downloadape.org", "thedocpdfconverter.com", "scorespipe.com", "frequencyplatform.com", "analysersources.com", "homeworksimplified.com", "bitcoinpricesearch.com", "fastpackagetracker.co", "streaming-time.com", "easymaillogin.com", "processersources.com", "getfileconvertor.org", "meuemailonline.com", "qeaven.com", "remoteformats.com", "smarterbrowsers.com", "remotebuffer.com", "analysernetwork.com", "leadingconfig.com", "analysersync.com", "staticoregano.com", "filmsds.com", "nanoelemnt.com", "majorformats.com", "tictacvoyage.com", "get-maps.com", "frequencyremote.com", "getspeedtester.com", "modesync.com", "servrflash.com", "majorprotocols.com", "metrohotspot.com", "gophotoz.com", "dextercanal.com", "originindexer.com", "pc-fix.us", "eclipseremote.com", "masterindexer.com", "frogvictor.com", "opticalformats.com", "edisoncolor.com", "originconfig.com", "ibet.ag", "portalindexer.com", "processerbrowser.com", "algorithmprojects.com", "partitionformats.com", "processerinternet.com", "origininterface.com", "processercontrol.com", "processersource.com", "networksremote.com", "processercache.com", "partitioninput.com", "analyzeformat.com", "queuebuffer.com", "queueinput.com", "platformformats.com", "networksprotocols.com", "processerservice.com", "analyzeprojects.com", "originformats.com", "frequencyindexer.com", "myquicklotto.com", "analyzeprotocols.com", "netsprojects.com", "netsplatform.com", "findiosearch.net", "testforspeed.com", "netsprotocols.com", "searchassists.com", "networkselemnt.com", "mackeeper.de", "networksprojects.com", "networksformat.com", "opticalelemnt.com", "networkssource.com", "ultradmin.com", "processerdisplay.com", "networkshelper.com", "gamestab.org", "upgradewindow.com", "analyzehelper.com", "horoscopebuddy.com", "opticalformat.com", "assistiveinternet.com", "launchinterface.com", "yourpackagetrackednow.com", "ultrascheduler.com", "generalmapper.com", "operativequest.com", "logicalinterface.com", "generalscheduler.com", "optimalwindow.com", "operativesignal.com", "logicalbrowser.com", "logicalhelper.com", "optimalinterface.com", "dailyfunnyworld.com", "essentialsignal.com", "logicalrotator.com", "analyserkey.com", "alpharchive.com", "launchtransaction.com", "drivingdirectionsnow.org", "fastpackagetracker.net", "mymapdirections.com", "earth-maps.net", "platformcache.com", "meinemailzentrum.com", "universalconsoles.com", "frequencyconfig.com", "projectmodules.com", "universalmodules.com", "defaultwebupgrade.com", "optimalrotator.com", "highdigitalbrowser.com", "essentialmodule.com", "highdigitalhelper.com", "upgrademodule.com", "smarttechorigin.com", "toolboxhelper.com", "essentiallocator.com", "activenetupgrade.com", "iitz.in", "weatheraddon.com", "getwebappstore2.com", "indexersystem.com", "airscalable.com", "nanodataproject.com", "highdigitalkey.com", "highdigitalorigin.com", "megaplatformupdate.com", "netmanagerbrowser.com", "defaultwebproject.com", "appartition.com", "megaplatformproject.com", "smarttechkey.com", "netmanagerproject.com", "megaplatformorigin.com", "netmanagerservice.com", "netmanagerhelper.com", "activenetproject.com", "equipcatalysts.com", "analyzeelemnt.com", "megaplatformservice.com", "assistiveaccessibility.com", "assistinterface.com", "activenetorigin.com", "browserrecognition.com", "next-site-loading.com", "kindheartedhereof.com", "geneticthreesome.com", "ludoproportioned.com", "unforcedexposures.com", "regulatorcolumns.com", "electromechanicalunshaved.com", "desiredunload.com", "journalsregulative.com", "obtenezemails.com", "findyourroute.net", "simpleholidayrecipes.com", "myfashiontab.com", "logineasier.co", "instantdocconverter.com", "srchmgrj.com", "apprecognition.com", "defaultaccessibility.com", "managerpartition.com", "mychristianportal.com", "managerrecognition.com", "sharedaccessibility.com", "samplehelper.com", "assistsample.com", "windowrecognition.com", "assistbalance.com", "internetpartition.com", "metroaccessibility.com", "archivequeue.com", "loginnow.net", "syncrecognition.com", "helperpartition.com", "cleanmymaconline.com", "metrolauncher.com", "metropartition.com", "learnthelyrics.com", "indexernetwork.com", "explorerrecognition.com", "defaultsmart.com", "activenetindex.com", "fastmapsanddirections.com", "trustedaccessibility.com", "weatherforecaster.net", "assistscalable.com", "fasttologin.com", "virtualformat.com", "controltransaction.com", "funkystreams.com", "getvideoconvert.com", "alfawallpapers.com", "networksinterface.com", "recessionsreassessed.com", "effluentsquaintness.com", "uprootedgene.com", "tidiesheal.com", "hewstencils.com", "sightlessvirginal.com", "defencelessuncensored.com", "gracingcoins.com", "pagerabbreviates.com", "unwaveringlylosings.com", "wenchmolts.com", "caneletterpress.com", "conformationrectifying.com", "obstructionsreflect.com", "housekeepingsunshine.com", "hordedunkirk.com", "dustersaffidavit.com", "bloweredify.com", "figconnectedness.com", "cachetentrust.com", "commontransaction.com", "displayremote.com", "protocolindexer.com", "portalbalance.com", "algorithmtransaction.com", "archivescheduler.com", "sentfromfriend.com", "baggiestreleasing.com", "chessboardsfulminations.com", "analyseraccessibility.com", "findpartition.com", "navigationmapper.com", "executivetransaction.com", "srchmgre.com", "characterremote.com", "majorsample.com", "abjectdegrees.com", "sarcasmsadoration.com", "projectbuffer.com", "frequencypartition.com", "talkreply.com", "notabenemessage.com", "listentotheradionow.net", "myinstantrecipes.com", "yoursportsinfonow.com", "myphotoeditor.co", "getlocalnews.co", "lps-warehouse.com", "livelocalweather.co", "clearaccessibility.com", "characteraccessibility.com", "assistaccessibility.com", "binaryscalable.com", "microscalable.com", "publicpartition.com", "originmapper.com", "herniasmetaphysically.com", "launchsearcher.com", "charactersync.com", "involvingnoninterference.com", "interfacerecognition.com", "potbelliedgreatgrandson.com", "curarewhiskey.com", "whalebonemuzak.com", "tanneriessubstrates.com", "protocolqueue.com", "doctrinaireunshaved.com", "controlscheduler.com", "avengingobeys.com", "mouthwateringpeaking.com", "displayaccessibility.com", "elemnttransaction.com", "floutingraindrop.com", "inductorsnephew.com", "frequencyscheduler.com", "getflightupdates.com", "logscalable.com", "sourceconfig.com", "microaccessibility.com", "essentialscalable.com", "operativebuffer.com", "sproutsfrothed.com", "lopeurges.com", "sporadiccritter.com", "subtotalsoaped.com", "mastermindingunresponsive.com", "chompdispense.com", "todayonlinenews.org", "getlocalnewsnow.co", "phnserv.eu", "mytruegames.com", "originremotes.com", "misrepresentationprescribe.com", "coppicesdames.com", "projectindexer.com", "platformscalable.com", "carstratagem.com", "functionsample.com", "crosscheckingdemocrat.com", "analyserformat.com", "sourcepartition.com", "oohthins.com", "megascalable.com", "footballercrinkling.com", "archivescalable.com", "elemntscheduler.com", "basicscalable.com", "binaryaccessibility.com", "frequencysmart.com", "logbalance.com", "functionbalance.com", "controlrecognition.com", "interfacescheduler.com", "mapbeast.com", "online-live-streaming.com", "whyfreezingmac.me", "theweathercenter.org", "myinstantforms.com", "leadingpartition.com", "frequencytransaction.com", "opticalpartition.com", "navigationbalance.com", "elemntsmart.com", "functiontransaction.com", "characterbalance.com", "getfamilyhistory.com", "sourcescheduler.com", "functionaccessibility.com", "masterscalable.com", "originbalance.com", "getwallpapers.fm", "logaccessibility.com", "platformscheduler.com", "freeforms.co", "localweatherradar.net", "quickconverterpro.com", "packagetrackeronline.co", "templatehub.co", "origintransaction.com", "processertransaction.com", "clearpartition.com", "platformaccessibility.com", "navigationsync.com", "masterrecognition.com", "processerscheduler.com", "commonscalable.com", "portaltransaction.com", "assistrecognition.com", "mapsdirection.org", "protocolscheduler.com", "algorithmpartition.com", "archiverecognition.com", "analysermapper.com", "sportsbookreview.com", "primaryaccessibility.com", "sourcerecognition.com", "myspeedtester.net", "controlbrowser.com", "functioninternet.com", "displaybrowser.com", "displayrecognition.com", "myweatherforecast.co", "cleanscalable.com", "findmapstab.com", "elemntbrowser.com", "elemntsample.com", "smartnetmode.com", "characterconfig.com", "logtransaction.com", "srchmgrk.com", "functionscheduler.com", "radiospotmac.com", "majoraccessibility.com", "originscheduler.com", "newnotecenter.com", "displayqueue.com", "cleanqueue.com", "executivescalable.com", "controlconfig.com", "protocolscalable.com", "algorithmdiscovery.com", "platformdiscovery.com", "analysertransaction.com", "sourcescalable.com", "interfaceconfig.com", "archiveaccessibility.com", "archiveformat.com", "getmapsanddirections.com", "logrecognition.com", "majorpartition.com", "activeaccessibility.com", "interfacebuffer.com", "nanoaccessibility.com", "portalscalable.com", "frequencydiscovery.com", "analysersmart.com", "agentwindows.com", "masteraccessibility.com", "freecoupon01.com", "interfacescalable.com", "executivesample.com", "elemntpartition.com", "displaybuffer.com", "originpartition.com", "sportextensions.com", "navigationbrowser.com", "jetztkonvertieren.com", "originrecognition.com", "portalrecognition.com", "platformformat.com", "projectrecognition.com", "protocolformat.com", "operativesmart.com", "analysersample.com", "mylocalclassifieds.co", "tracknfollow.com", "functionindexer.com", "analyserscheduler.com", "elemntbuffer.com", "protocolrecognition.com", "prayogs.com", "archivebrowser.com", "interfaceformat.com", "navigationscheduler.com", "platformtransaction.com", "frequencymemory.com", "protocolpartition.com", "why-freezing-mac.com", "localweatherradarnow.com", "functionmapper.com", "hmapdirectionshome.com", "getspeedtestfast.com", "trackflightsnow.net", "characterscalable.com", "platforminterface.com", "processeronline.com", "interfacesample.com", "functionqueue.com", "displayinput.com", "protocoldiscovery.com", "elemntmapper.com", "monconvertisseur.com", "navigationdiscovery.com", "salahweb.com", "operativescalable.com", "navigationmemory.com", "characterinput.com", "characterindexer.com", "hmyweatherhomepage.com", "protocolmemory.com", "defendsearch.com", "charactermode.com", "adminqueue.com", "mymapsfinder.com", "protocolsample.com", "elemntindexer.com", "platformremote.com", "navigationpartition.com", "whyfreezingmac.com", "basicmodules.com", "freshplatforms.com", "globalychannels.com", "binarysign.com", "processerdiscovery.com", "intellectualsignals.com", "highchannels.com", "leadingchannels.com", "characterinternet.com", "intellectualsign.com", "primaryguides.com", "freshcharacter.com", "functionformat.com", "operativechannels.com", "viewmapstab-nt.com", "higharchive.com", "primarychannels.com", "optimalplatforms.com", "opticalchannels.com", "operativetools.com", "binarymodules.com", "operativesignals.com", "executivecharacter.com", "intellectualchannels.com", "operativeconsole.com", "executiveconfig.com", "agentsample.com", "enumeratorbalance.com", "applicationelemnt.com", "adminbinary.com", "trustybargins.com", "serviceshares.com", "enumeratornetwork.com", "cacheplatform.com", "filterbuffer.com", "coordinatorconfig.com", "filterbalance.com", "elementaryaccessibility.com", "locatorconfig.com", "cachenavigation.com", "enumeratorinterface.com", "applicationformat.com", "systemoperative.com", "upgradeprimary.com", "varietyservice.com", "shopping-day.com", "enumeratortech.com", "handlerbalance.com", "gamez4us.com", "xraysport.com", "coordinatormemory.com", "enginebinary.com", "enumeratorbasic.com", "cachepartition.com", "kromtech.net", "coordinatornet.com", "cachebuffer.com", "applicationpublic.com", "coordinatorqueue.com", "handlervirtual.com", "enginepartition.com", "systemthings.com", "chrome-newtab.com", "filterinterface.com", "privatemetro.com", "streammetro.com", "prospeedcheck.com", "locatorpoint.com", "coordinatorpublic.com", "enginenavigation.com", "thinklocator.com", "processoptical.com", "likeprocess.com", "handlerelemnt.com", "processlook.com", "engineplatform.com", "processidea.com", "launchsigns.com", "launchzip.com", "launchreal.com", "systemoffer.com", "handlersource.com", "functionremote.com", "hdexecutive.com", "initiatorvirtual.com", "launchaccessibility.com", "launchremote.com", "optimizationqueue.com", "locatorprotocol.com", "enginebalance.com", "coordinatordisplay.com", "launcherbalance.com", "clearindexer.com", "livingappmac.com", "explorerfrequency.com", "cacheexecutive.com", "filterbrowser.com", "binaryupdater.com", "helperdaily.com", "doctopdfpro.com", "rivalservice.com", "activesample.com", "balancedbuffer.com", "processbinary.com", "trustpartition.com", "handlerformat.com", "enumeratorprotocol.com", "updatermemory.com", "launcheraccess.com", "upgradebalance.com", "convertowiz.com", "publiclocators.com", "servicelast.com", "any-templates.com", "onedefault.com", "balancedmemory.com", "locatorbuffer.com", "doubledcloud.com", "balancedinterfaces.com", "basicmetro.com", "majoradmins.com", "dynamicindexer.com", "techcharacter.com", "resultsdev.com", "dynamicelemnt.com", "supersanguinity.com", "elementarydisplay.com", "transithelper.co", "fileconvertonline.com", "serviceagile.com", "assistivelookup.com", "appelemnt.com", "activeformat.com", "package-manager.net", "htrackyourpackagenow.com", "coordinatormaster.com", "initiatornetwork.com", "scalablelog.com", "networkingdrive.com", "globalbuffer.com", "notify-service.com", "selectfact.com", "defaultadmin.com", "pageshows.com", "processerclear.com", "sharedfunction.com", "assistivefunction.com", "applicationstock.com", "optimalinitiator.com", "visualgeneral.com", "successmake.com", "knowadvisor.com", "ignitemap.com", "atrafficreseller.co", "professionalset.com", "perfectexclusive.com", "optimizationpublic.com", "hearthandsatellitemaps.com", "pageaffiliate.com", "exclusivetracker.com", "launcherlink.com", "primarymax.com", "stocknetworking.com", "askstage.com", "processerfrequency.com", "generalenumerator.com", "secondperfect.com", "linereach.com", "applicationgear.com", "inetlauncher.com", "twoready.com", "rotatoroptical.com", "groupspage.com", "readydreams.com", "focusbasic.com", "opticalexplorer.com", "getcloudosapps1.com", "companybasic.com", "operativeinitiator.com", "sourcedays.com", "centeranswers.com", "channelseeker.com", "basicfuture.com", "geniusopen.com", "centerreader.com", "systembrowse.com", "channelthemes.com", "insideperfect.com", "knowinteractive.com", "customknow.com", "aftergenius.com", "factsuccess.com", "classstage.com", "organicknow.com", "expresswidget.com", "enlightenedinfo.com", "chancefirst.com", "optimizationscalable.com", "centerarchieve.com", "infofeature.com", "stageoffers.com", "activateview.com", "seasonfirst.com", "taxinfohelp.com", "optimizeraccessibility.com", "previsionmeteolocale.com", "adminanalog.com", "initiatormethod.com", "protocolinitiator.com", "partitionmemory.com", "memoryanalog.com", "enviromentaccess.com", "enumeratorpartition.com", "devupdater.com", "queueinitiator.com", "engtransaction.com", "formatoptimizer.com", "remotelauncher.com", "sweetdoppleganger.com", "activateinfo.com", "howtopro.co", "loglauncher.com", "speedygonzscooter.com", "speedmacs.com", "prideppl.com", "screeningmovie.com", "indexertool.com", "tabwindow.com", "puchmacpull.com", "storymacbegin.com", "myformssuite.com", "menispermaceous.com", "topsearchtools.com", "agentleading.com", "mappertask.com", "pathawayfast.com", "dataimprovment.com", "stepbymac.com", "sweetsourmac.com", "prettymacworld.com", "remacaddition.com", "preferthemac.com", "handlerpublic.com", "trackenumerator.com", "mgrfilter.com", "commonalgorithm.com", "helperclick.com", "assistproduct.com", "schedulermemory.com", "rotatoradmin.com", "baseassist.com", "recognitionconfig.com", "newtabcontent.com", "balanceanalog.com", "loginitiator.com", "queuememory.com", "serveralgorithm.com", "mysoftwaresstore.com", "bufferwindow.com", "cacheanalog.com", "configcollection.com", "formattransaction.com", "memoryupdater.com", "characteraccess.com", "assistselect.com", "watchonlinestreams.co", "coordinatoraccess.com", "controlupdater.com", "accessibilitycollection.com", "methodaccessibility.com", "developmentmanage.com", "rotatorsource.com", "activityremote.com", "vudusearch.com", "deskgeneration.com", "processarchive.com", "consoletask.com", "commandmapper.com", "systemcharacter.com", "enginewindow.com", "questalgorithm.com", "elementarychannel.com", "myradionow.net", "servicenviroment.com", "windowalgorithm.com", "horoscope-zone.com", "desktoptransaction.com", "bufferanalog.com", "legitcomputer.com", "detectionanalyser.com", "updaterinternet.com", "developmentinput.com", "devicebalance.com", "comptian-worsects.com", "loginfaster.net", "filmzya.com", "questindexer.com", "servicearchive.com", "recognitioninput.com", "operationinitiator.com", "launcherdevelopment.com", "queuearchive.com", "quick-converter.com", "recognitioninterface.com", "docspdfconverter.com", "hgetrecipes.com", "toolalgorithm.com", "toolanalyser.com", "searchmanagertech.com", "map-directions.org", "processinitiator.com", "hweatherforecaster.com", "fromfunny22.agency", "hfreemapsanddirections.com", "pdfconverterhub.com", "optimizerinput.com", "newtabnews.com", "hmyclassifiedslist.net", "rotatorchannel.com", "gamerz-land.com", "homeinfire13.agency", "heasyspeedtracker.com", "productmanualsguide.com", "questconfig.com", "protocolenumerator.com", "generationapplication.com", "bufferentry.com", "convertirarchivos.com", "protocolarchive.com", "hfreemanualsandguides.com", "rotatorfrequency.com", "launcherscheduler.com", "accessinput.com", "devicecharacter.com", "locatorapplication.com", "channelanalog.com", "enumeratorimprovment.com", "desktopqueue.com", "protected-search.com", "discoveryrecognition.com", "improvmentapp.com", "findoperation.com", "freetemplatefinder.com", "adventurelv.com", "handlersync.com", "platformeng.com", "projectanalyser.com", "medianetnow.com", "desktoprecognition.com", "hyourstreamingtvnow.com", "indexergeneration.com", "entryfilter.com", "improvmentindexer.com", "indexerquest.com", "initiatorrotator.com", "hsatelliteandearthmaps.com", "hgetnewsfast.com", "inputdevelopment.com", "thenewsnotifications.com", "giph-it.com", "score-stars.com", "gamessrch.com", "free-converterz.com", "moviebox-online.com", "infows.com", "game-jungle.com", "easydoctopdf.com", "smarteasymaps.com", "ebooks-club.com", "getformshere.com", "mapperquest.com", "videoconverterz.com", "searchfrit.com", "newtabgallery.com", "gettmaps.com", "handy-tab.com", "goquickmails.com", "operationenviroment.com", "get-new-software.com", "myvideoconverter.co", "free-streamz.com", "yoursuperconverter.com", "downloadconverter.co", "wallpapers-nt.fm", "fileconverterplus.com", "quickneasyrecipes.co", "hfreeonlinemanuals.com", "watch-new-software.com", "instantnewsnow.com", "install-plug.com", "politicalnewscenter.com", "hgetfreetranslations.com", "moocauby.com", "easywayy.com", "mymapssearch.com", "transitapp.net", "loginhelper.co", "filesendfree.com", "processerfind.com", "templatehelper.co", "notificationz.com", "pdf-extension.com", "dailyproductivitytools.com", "filmsrch.com", "collectionfind.com", "packagetrackerplus.com", "weatherforecastalerts.net", "greatfileconverter.com", "getconverternow.com", "worldwideforecasts.com", "kittens-pictures.com", "mypdfconverter.net", "fstsrv.com", "stream-push.com", "macx.cf", "pdfspark.com"],
			titleFilter = [
				"add searchfort plus", // http://www.searchfortplus.com/?source=2911&clickid=w2TFFOGDSTAA979D1MAAH5AQ
				"powerfulappz", // http://www.powerfulappz.com/?lnk=err_link&vert=tvsport
				"(1) scanner", // http://supportfix.tech/apple/?c=j35JP0YZqCU&pid=108995_5a01fca9-d552-45e9-a47c-f34d2a14e626#ent
				"yourtemplatefinder", // http://free.yourtemplatefinder.com/index.jhtml
				{ include: "easypdfcombine", exclude: "remove" }, // http://free.easypdfcombine.com/index.jhtml
				{ include: "flash player update", exclude: ["fake", "scareware", "infect", "scam", "uninstall", "how to", "is valid", "search:", "virus", "remove"] },
				"flash player download",
				"update your flash player", "playmediacenter", "yourfreeforms", "videodownloadconverter",
				{
				    include: "mackeeper", exclude: ["uninstall", "get rid", "remove", "avoid", "do not install", "scam", "fraud", "desinstalar", "review", "removing", "menghapus", "deinstall", "deinstallieren",
                       "annoying", "escroquerie", "malware", "fjern", "slette", "erfahrungsbericht", "supprimer", "désinstaller", "instalar", "entfernen", "eliminar", "desinstalación", "is it safe", "searched for",
                       "crack", "coupon", "detectx", "avoid", "avinstallerar", "nicht installieren", "bewertung", "désinstallation", "virus", "accidentally", "how to cancel", "search results", "expose", "investigate",
                       "löschen", "test", "fragwürdiges", "bloquer", "test", "débarrasser", "verwijderen", "gỡ bỏ", "block", "securemacos", "alternative", "arrêter", "удалить", "removal", "odinštalovať", "odstranit",
                       "désintaller", "silme", "移除", "vorsicht vor", "ช่วยบอกวิธีลบ", "rimuovere", "disinstallare", "beware", "ta bort", "niet moet gebruiken", "l’éviter", "l’arnaque", "malveillante", "niet moet installeren",
                       "niet moet gebruiken", "täuscht weiter", "attention à l’arnaque", "не стоит устанавливать"]
				},
				{ include: "mac mechanic", exclude: ["uninstall", "get rid", "remove", "avoid", "do not install", "scam", "fraud", "review", "removing", "menghapus", "desinstalar", "deinstallieren", "annoying", "escroquerie", "malware", "fjern", "slette", "erfahrungsbericht", "supprimer", "désinstaller", "instalar", "entfernen", "eliminar", "desinstalación", "is it safe", "searched for", "crack", "coupon", "detectx", "avoid", "avinstallerar", "nicht installieren", "bewertung", "désinstallation", "virus", "accidentally", "how to cancel"] },
				{ include: "virus found", exclude: ["deadly", "tick", "human", "fake", "scam", "health", "scam", "mosquito", "nile", "enterovirus", "parvovirus", "vaccine"] },
				{ include: "atozmanuals", exclude: ["remove"] },
				{ include: "newtab", exclude: ["newtable", "anzeigen", "deinstall", "remove", "how to"] },
				{
				    include: "new tab", exclude: ["how to", "mute", "mystart", "new table", "momentum", "malware", "removal", "new tab themes - free addons", "new tabs", "new taboo", "new tabernacle", "new tabata", "opening", "university", "keeps opening", "open link", "design", "anzeigen", "deinstall", "if trouble viewing", "fix", "how do", "sportify", "new tab search", "widgets for awesome", "extensions", "new tabards", "matlab", "themes for chrome", "default page", "interpol"], js:
                       function () {
                           var skipDomains = ["onlygoodlife.co", "searchatlas.co", "smartsearchnow.co", "unionyou.com", "findgofind.com", "64px.com", "tabzmania.com", "searchlock.com", "searchdimension.com", "financialinfos.com", "lovelytab.com", "stormtab.com"];
                           if (checkFilter(topDomain, skipDomains)) { return true; } var path = window.location.pathname;
                           if (path === "/homepage/homepage.html" && getQSParam("id") && getQSParam("implId")) { return true; }
                           if (path === "/search.html" && getQSParam("type") == "search" && getQSParam("id")) { return true; }
                           if (typeof h6_right == "object" && typeof h6_left == "object" && typeof asap == "function" && typeof MSLocker == "object" && typeof fastload == "object") { return true; }
                           if (typeof _asyncToGenerator == "function" && typeof _tr_ac_se == "string" && typeof trackGA == "function" && document.getElementById("doSearch") && document.getElementById("main_clock")) { return true; } return false;
                       }
				},
				{ include: "fromdoctopdf", exclude: ["eliminar"] },
				{ include: "weatherblink", exclude: ["remove"] },
				"myvideotab", "myfriendlyappz", "myfilms", "internetspeedtracker", "filmfanatic", "ezbrowsing", "download converter now",
				"packagetracer", "getmediaplus", "lucky pdf", "pdf mac master", "vixplayer", "funsafetab", "medianewpage", "myappzcenter",
				"best quad video player", "autopdfbox", "emailbeautifier", "flash player might be outdated", "doctopdf", "enjoy your free new download manager for mac", "searchapp",
				"convert & edit pdf documents – free", "maccleaner", "pdfspark"
			],
			urlFilter = [
				// "mackeeper", // 07/05/18 [dudi] - false positives because of Bundlore injects "//secure.myshopcouponmac.com/servicejs/components/js/?key=mackeeper-do&source=upd-1809&isn=800&group=RCttMlJFMmdnZU9HUW5hWFo0MndPZz09"
				"myvideotab", "i3j3u3u9", "myfriendlyappz", "thewhizmarketing", "fulltabsearch", "tvplusnewtab", "pdfmacmaster", "d11tkcy2269r1k", "doctopdfpbu", "videodownloadconverter"],
			chromeStoreIDs = ["elgohmlhdjbocmhgnmkklmchinhnldcp", "dbcjededgbgcdgeaeebbaoejehdnocmp", "pfpkoadokjfomnilcmadkkiglnenjckj", "jlpafecglkplnaijkglfdmgilmnajeoc", "gjboglidipegghaephkegfigeonlijcp", "pedfjomhepkpjnninjbgancbgjcncjim", "nhnhbofjjgghdpjchejiimjpofilfnkj", "ommkepohpokablkapbhgnlmdbbnfeibb", "iobjnmhjolomhiikmbglkomigcmlfhlo", "edlnojcclfhfnjegbdkcdigjnlmjkfnn", "hpmgkkhdiinhabnmpnkjdoojajhlokoi", "fimgpamnkpcmmgggkmaalpdiclnpbhge", "mgbdaibcnpbhieicggggmacifjfflien", "pdaddhinokbhjfclpdlalmipgifhkkhe", "jdblhcjnbpdkhpbhfmjabpmdghdeieaj", "nnaaoepanoecdfeceblffbkanjkleipp", "jkcgfdgkbambgbobgkceeoalcdefpink", "hjmkkcnohookadjblmpdoecmoplneceb", "aolabamplndphpflmejlnelcpafdmmnj", "clggcbjlhhkejmaamaoagacamlbnhaho", "olkaaopfcpaoknpopklcebffligfejkf", "hffhlimgnljjlphoepkagoknmejfjong", "kejdbcdlcodhkmenkfflpgjgdfocbkjl", "agijeemohccmknhbgdjokbeekmijlbee", "fiihbfmmhmggfhkflnhllkpkcpnglemk", "phflfibimbpfbomplhchaknpfhohpiib", "noigpdigjahepgmlcoofmicleimibmep", "ekhcellpiijnflompocobajlhlegbfpo", "ceopeopklkjjgehbmjdohddokcencgoi", "gjjkeapmkkkclpcdgmhggjlbognhjcbm", "kgnodfbomofikmhhkolcgaiknbgcmhfa", "anaojjlbaalfefdgonnpmcpgpeafkdig", "choldamfbgcelgcjoapndfcgiolendml", "cdphnbnmmdamamhmeomchgfaifkdnnhp", "dcmpjpdpadeofdmjbdakbomjllafeoed", "ebhcflbfnmlobiplacldedddeplbjfoc", "odnihbmlbfmfjpgdbbmhdieojmdemnha", "dnbemglndecfpebpabhbfkjhlfmdhhlk", "mbhankfgegabibnflmiknnlpomhpjfnk", "jkeoimepglkbgofijkmkhmeohddbjbol", "dgbldpiollgaehnlegmfhioconikkjjh", "hgjdbeiflalimgifllheflljdconlbig", "ajjilkidmlnfbdmlfcpkngmbnblhmmik", "gdmpjbdhmffgajnnblaghlhpacncdmjp", "degpmnmggookmioibafbehcmfobhinpe", "elgohmlhdjbocmhgnmkklmchinhnldcp", "dbcjededgbgcdgeaeebbaoejehdnocmp", "pfpkoadokjfomnilcmadkkiglnenjckj", "jlpafecglkplnaijkglfdmgilmnajeoc", "gjboglidipegghaephkegfigeonlijcp", "pedfjomhepkpjnninjbgancbgjcncjim", "nhnhbofjjgghdpjchejiimjpofilfnkj", "ommkepohpokablkapbhgnlmdbbnfeibb", "iobjnmhjolomhiikmbglkomigcmlfhlo", "edlnojcclfhfnjegbdkcdigjnlmjkfnn", "hpmgkkhdiinhabnmpnkjdoojajhlokoi", "fimgpamnkpcmmgggkmaalpdiclnpbhge", "mgbdaibcnpbhieicggggmacifjfflien", "pdaddhinokbhjfclpdlalmipgifhkkhe", "jdblhcjnbpdkhpbhfmjabpmdghdeieaj", "nnaaoepanoecdfeceblffbkanjkleipp", "jkcgfdgkbambgbobgkceeoalcdefpink", "hjmkkcnohookadjblmpdoecmoplneceb", "aolabamplndphpflmejlnelcpafdmmnj", "clggcbjlhhkejmaamaoagacamlbnhaho", "hffhlimgnljjlphoepkagoknmejfjong", "kejdbcdlcodhkmenkfflpgjgdfocbkjl", "agijeemohccmknhbgdjokbeekmijlbee", "fiihbfmmhmggfhkflnhllkpkcpnglemk", "phflfibimbpfbomplhchaknpfhohpiib", "noigpdigjahepgmlcoofmicleimibmep", "ekhcellpiijnflompocobajlhlegbfpo", "ceopeopklkjjgehbmjdohddokcencgoi", "gjjkeapmkkkclpcdgmhggjlbognhjcbm", "anaojjlbaalfefdgonnpmcpgpeafkdig", "choldamfbgcelgcjoapndfcgiolendml", "cdphnbnmmdamamhmeomchgfaifkdnnhp", "dcmpjpdpadeofdmjbdakbomjllafeoed", "ebhcflbfnmlobiplacldedddeplbjfoc", "odnihbmlbfmfjpgdbbmhdieojmdemnha", "dnbemglndecfpebpabhbfkjhlfmdhhlk", "mbhankfgegabibnflmiknnlpomhpjfnk", "jkeoimepglkbgofijkmkhmeohddbjbol", "mnigdddmfgclhdagodnlljdnhkmcimpm", "dkciogojemfhmmajmjgikbdokkkncibc", "nkjclfjofddabgpkanppjifaejfcljme", "mfhbifcodhgiegfbmppkfpjjjlollnhb", "dihhefngbgbaippogepoiofghjakljgi", "kkhnjgkckcaepncodfkeaeahfdogjcme", "kjhgiknbbelnfpbliecglhiedkbhbjeb", "kofapcpifepghmlnmapibhhimlanmfap"],
			phraseCombosFilter = [
				// ["adobe flash player update"], // 24/04/18 [dudi] - removed because of a few false positives 
				["our extensions will make your everyday browsing experience easier, faster and enjoyable", "upgrade your browser", "we are sure you will find them very useful and practical"], // http://www.playmediacenter.com/?lnk=err_link&vert=tvsport
				["your flash player is ready to install"],
				// ["install the latest version of flash player"], // 10/05/18 [dudi] - false-positives
				["the latest version of flash is ready to install now"],
				["click allow to open your file", "your download is ready"],
				["access unlimited", "you must be logged in to access", "click allow to create", "your free account"],
				["press allow to stream/download the song", "4:25", "0.8"],
				["trustnav security suite", "add to chrome"],
				["update your flash player", "update the latest version for better perfomance", "install"],
				["download now for free", "free new download manager for mac"],
				["update your flash player", "might be out of date", "for better performance"],
				["downloader", "search app", "by clicking the button on the right side and installing a new search app"],
				["mixvideostart", "add to chrome"], // http://www.powerfulappz.com/?lnk=err_link&vert=tvsport
				["upgrade your browser", "add to app chrome", "finder search"], // http://www.myappzcenter.com/?lnk=err_link&vert=music
				["your download is ready", "new tab page", "by clicking the button", "set your home, new tab page and your default search"], // http://easyspeedtest.co/?adprovider=AppFocus1&source=d&device=c&creative=245056369344&keyword=&matchtype=&adposition=none&placement=www.dwnlflash.com&target=
				["download your flash player", "your latest version of flash player is ready to download", "download flash player"], // http://www.indexerprocess.com/wWNTE?source=14518&sub_id=87ee0d9e4a509c44a331d42d9089db29327f3ab0&c=2c0add09-91cf-e711-a367-f7801280a94b&s=0f1cd617-9da4-4717-b4d9-00b402102147&client=chrome&h=TRJCTBYMFgEABwgdCAcbBQdkBgUKCgcMAQEeDwMEDgcHAB4AAQoACBYaFlpAFAoCCwMEBgcFBwkCFBZVFgkSBFMAWVBSBAodDwFTXhlTAwIBG1EDDgMbUgQIBgECAARXDQdSFBwSVERSFgkSXkRESA4ZG0RHQR5ZVlBTTFZCRkJfW1FFRx1TWV0SFBZFUxEKWEVcVBgURFBZFAoDDAAaFlBURhIKTEZDUU4%253D&a=1&u=aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tLzdiNjk3MzE1LTc2YjktNGNkOS1hL2d5MWZ6UmxYdjAveW4wTFdKd0lDMC9QbGF5ZXIuZG1nP3NvdXJjZT0xNDUxOCZzdWJfaWQ9ODdlZTBkOWU0YTUwOWM0NGEzMzFkNDJkOTA4OWRiMjkzMjdmM2FiMCZjPTJjMGFkZDA5LTkxY2YtZTcxMS1hMzY3LWY3ODAxMjgwYTk0YiZzPTBmMWNkNjE3LTlkYTQtNDcxNy1iNGQ5LTAwYjQwMjEwMjE0NyZjbGllbnQ9Y2hyb21l#
				["please add", "recommended", "convenient web search", "no download required", "by clicking the button below and adding"] // http://www.searchfortplus.com/?source=2911&clickid=w2TFFOGDSTAA979D1MAAH5AQ
			],
			topDomain = getTopDomain(),
			reasonObj = { id: REASON_GENERAL, data: "", ver: version, topDomain: topDomain },
			isExcluded, cleanURLString;

        // just for the dev env:
        // REASON_GENERAL="general"; REASON_DOMAIN="domain"; REASON_TITLE="title"; REASON_URL="url"; REASON_CHROMESTOREID="chrome id"; REASON_LINKELEMENT_DOMAIN="link domain"; REASON_SCRIPTELEMENT_DOMAIN="script domain"; REASON_SCRIPTELEMENT_URL="script url"; REASON_PHRASECOMBO="phrasecombo"; REASON_GLOBALVARSSET="globalvar"; REASON_QUERYSTRING="qs"; REASON_BASETAG="basetag"; REASON_SEARCHCHROMEEXT="searchext"; REASON_DOMELEMENTS="dom";

        function getTopDomain() {
            var h, tempCookie = 'tldCookie=cookie',
				hostname = document.location.hostname.split('.'),
				fallbackHostname = document.location.hostname;

            for (var i = hostname.length - 1; i >= 0; i--) {
                var h = hostname.slice(i).join('.');
                document.cookie = tempCookie + ';domain=.' + h + ';';

                if (document.cookie.indexOf(tempCookie) > -1) {
                    if (!h || fallbackHostname.indexOf(h) === -1) {
                        return fallbackHostname;
                    }

                    document.cookie = tempCookie.split('=')[0] + '=;domain=.' + h + ';expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    return h;
                }
            }

            return fallbackHostname;
        }

        function setReasonObj(id, data) {
            reasonObj.id = id;
            reasonObj.data = data;
            return true;
        }

        function getQSParam(name, url) {
            if (!url) url = window.location.href;
            var name = name.replace(/[\[\]]/g, "\\$&"),
				regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
				results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        function checkFilter(str, arr, reasonID) {
            var isDomain;

            if (reasonID) {
                switch (reasonID) {
                    case REASON_DOMAIN:
                    case REASON_LINKELEMENT_DOMAIN:
                    case REASON_SCRIPTELEMENT_DOMAIN:
                        isDomain = true;
                        break;
                }
            }

            for (var i = 0; i < arr.length; i++) {
                var includeStr, excludeStrings, excludeJS, isMatch;

                if (typeof arr[i] == "object") {
                    includeStr = arr[i]["include"];
                    excludeStrings = arr[i]["exclude"];
                    excludeJS = arr[i]["js"];
                } else {
                    includeStr = arr[i];
                }

                if ((reasonID == REASON_EXACTURL && str == includeStr) || (isDomain && includeStr === str) || (reasonID != REASON_EXACTURL && !isDomain && str.indexOf(includeStr) > -1)) {
                    isMatch = true;
                }

                if (isMatch) {
                    if (typeof (excludeJS) === "function" && excludeJS()) {
                        isExcluded = true;
                        return false;
                    }

                    if (excludeStrings && excludeStrings.length && checkFilter(str, excludeStrings)) {
                        isExcluded = true;
                        return false;
                    }

                    if (reasonID) {
                        setReasonObj(reasonID, str);
                    }
                    return true;
                }
            }
            return false;
        }

        function checkGlobalVarsSet(arr) {
            for (var i = 0; i < arr.length; i++) {
                if (typeof arr[i] != "object") {
                    if (typeof window[arr[i]] == "undefined") {
                        return false;
                    }
                } else {
                    var varName = arr[i][0], varType = arr[i][1];

                    if (typeof window[varName] != varType) {
                        return false;
                    }
                }
            }

            setReasonObj(REASON_GLOBALVARSSET, arr);
            return true;
        }

        function checkDOMPresence(arr) {
            var foundElements = 0;

            for (var i = 0; i < arr.length; i++) {
                var currObj = arr[i];

                if ((currObj["id"] && document.getElementById(currObj["id"])) ||
					(currObj["class"] && document.getElementsByClassName(currObj["class"]).length > 0)) {
                    foundElements++;
                }
            }

            if (foundElements == arr.length) {
                setReasonObj(REASON_DOMELEMENTS, arr);
                return true;
            }

            return false;
        }

        function cleanExactURLString() {
            if (!cleanURLString) {
                var str = window.location.href;
                str = str.replace("http://", "");
                str = str.replace("https://", "");

                if (str.indexOf("?") > -1) {
                    str = str.substring(0, str.indexOf("?"))
                }

                if (str[str.length - 1] == "/") {
                    str = str.substring(0, str.length - 1);
                }

                if (str.length >= 4 && str.substring(0, 4) == "www.") {
                    str = str.substr(4);
                }

                cleanURLString = str;
            }

            return cleanURLString;
        }




        function isWhitelisted() {
            if (topDomain) {
                var topDomainArr = topDomain.split('.');
                for (var i = 0; i < whitelist.length; i++) {
                    var wlDomain = whitelist[i].split('.');
                    if ((wlDomain.length === 1 && wlDomain[0] === topDomainArr[0]) || (topDomain === whitelist[i])) {
                        return true;
                    }
                }
            }

            var str = cleanExactURLString();

            if (checkFilter(str, exactURLs, REASON_EXACTURL)) {
                return true;
            }

            return false;
        }

        if (isWhitelisted()) {
            return false;
        }

        var title = document.title.toLowerCase();

        if (checkFilter(topDomain, domains, REASON_DOMAIN) || checkFilter(title, titleFilter, REASON_TITLE)) {
            return reasonObj;
        } else if (isExcluded) {
            return false;
        }


        if (
			(checkFilter(document.location.href, urlFilter, REASON_URL)) ||
			(checkGlobalVarsSet([["ExtensionToolbar", "function"]]) && !(window["sProdName"] && window["sProdName"] == "MyFunCards") && !(window["_AnemoneParams"] && window["_AnemoneParams"]["appId"] == "TypingFanatic")) ||
			(checkGlobalVarsSet([["setExtCallback", "function"]])) ||
			(checkGlobalVarsSet(["elementId", "source", "addStyle", "showInstruction"])) ||
			(checkGlobalVarsSet([["dataObj", "object"]]) && dataObj["ext_name"] && dataObj["product"] && dataObj["install-button"] && (dataObj["install-button"].toLowerCase().indexOf("install-button") > -1 || dataObj["product"].toLowerCase().indexOf("search") > -1)) ||
			(checkGlobalVarsSet(["disableInstall", "continueInstall", "continueInstallURL"])) ||
			(checkGlobalVarsSet(["clientBrowser", "clientBrowserVersion", "clientBrowserMajorVersion", "clientPlatform", "clientPlatformVersion", "campaignid", "clickid", "lpid", "network", "account", "downloadAdvertiser"])) ||
			(checkGlobalVarsSet(["baseLink", "baseLinkPath", "baseRelUrl"])) ||
			(checkGlobalVarsSet(["ExtensionId", "ExtensionName", "FullPageClick", "UseFFInstaller"])) ||
			(checkGlobalVarsSet(["chromeUrl", "cid", "group"])) ||
			(checkGlobalVarsSet([["showStep", "function"], ["hidePop", "function"]])) ||
			(checkGlobalVarsSet([["lpConfigParams", "object"]]) && lpConfigParams["ext_id"] && lpConfigParams["offer"]) ||
			(getQSParam("rdgntbm") && getQSParam("rdgntbm").length > 10 && setReasonObj(REASON_QUERYSTRING, location.search)) ||
			(checkGlobalVarsSet([["dontgo", "boolean"], ["c", "object"]]) && window["c"].innerText && window["c"].innerText.indexOf("MAC CLEANER") > -1) || // http://supportfix.tech/apple/?c=j35JP0YZqCU&pid=108995_5a01fca9-d552-45e9-a47c-f34d2a14e626#ent
			(checkGlobalVarsSet([["hasoffers_click", "string"], ["spt", "object"]]) && (spt.installURL || spt.alreadyInstalledURL)) || // http://easyspeedtest.co/?adprovider=AppFocus1&source=d&device=c&creative=245056369344&keyword=&matchtype=&adposition=none&placement=www.dwnlflash.com&target=
			(checkGlobalVarsSet([["botDetect", "object"]]) && botDetect.tests && checkDOMPresence([{ id: "chrome_helper" }, { id: "safari_helper" }, { id: "firefox_helper" }])) || // http://www.indexerprocess.com/wWNTE?source=14518&sub_id=87ee0d9e4a509c44a331d42d9089db29327f3ab0&c=2c0add09-91cf-e711-a367-f7801280a94b&s=0f1cd617-9da4-4717-b4d9-00b402102147&client=chrome&h=TRJCTBYMFgEABwgdCAcbBQdkBgUKCgcMAQEeDwMEDgcHAB4AAQoACBYaFlpAFAoCCwMEBgcFBwkCFBZVFgkSBFMAWVBSBAodDwFTXhlTAwIBG1EDDgMbUgQIBgECAARXDQdSFBwSVERSFgkSXkRESA4ZG0RHQR5ZVlBTTFZCRkJfW1FFRx1TWV0SFBZFUxEKWEVcVBgURFBZFAoDDAAaFlBURhIKTEZDUU4%253D&a=1&u=aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tLzdiNjk3MzE1LTc2YjktNGNkOS1hL2d5MWZ6UmxYdjAveW4wTFdKd0lDMC9QbGF5ZXIuZG1nP3NvdXJjZT0xNDUxOCZzdWJfaWQ9ODdlZTBkOWU0YTUwOWM0NGEzMzFkNDJkOTA4OWRiMjkzMjdmM2FiMCZjPTJjMGFkZDA5LTkxY2YtZTcxMS1hMzY3LWY3ODAxMjgwYTk0YiZzPTBmMWNkNjE3LTlkYTQtNDcxNy1iNGQ5LTAwYjQwMjEwMjE0NyZjbGllbnQ9Y2hyb21l#
			(checkGlobalVarsSet([["installExtension", "function"], ["showPop", "function"], ["showStep", "function"], ["pingMe", "function"], ["getUrlVars", "function"], ["installFFExtension", "function"]])) || // https://pdfconverter.pro/landing-pages/html/index.html?click_id=_9Wy878gLZWyrlJhsW2L3FwpG9_IiprBeC7iaiNAB2JnkTC7jP_9XI0K4tsCTEMHu70QCaHWRxNW3uEQ8jgcxDHvQH9wI9-oVZr1LppDrY_9-gnaA3tsWJLW01X9BpN_gg4NzC8Nx8DkBYhUPayX5j1tHkL2IQnno1Kwoh3-_xeB6WWObr2-9HSM41VajzgrwiBFcao54UWRdseZ986OigImI9dkTPh8akXuOyob7SLG6Ygc9xzXZCftXM4brOetccTDz7nNAsE387FuLvuQHDbHiLr21UThN2PAJx9vejGStr9UsrMeActLbHEcla0OjPdPpnccIgQxISZq005muizVz_2wK8WmRFplPMfF2xmUZz-9VgdielfqiWhlSTbq&utm_source=15208&utm_medium=con
			(checkGlobalVarsSet([["QueryString", "function"], ["source", "string"], ["clickid", "string"], ["addBox", "object"], ["addBox2", "object"], ["underBox", "object"], ["pathByLang", "object"], ["redirectPlainUrl", "string"], ["injectCallback", "function"]])) // http://www.searchfortplus.com/?source=2911&clickid=w2TFFOGDSTAA979D1MAAH5AQ
		) {
            return reasonObj;
        }

        var nParam = getQSParam("n");

        if (((location.hostname.substr(location.hostname.length - 4, location.hostname.length) == '.win') || (location.hostname.substr(location.hostname.length - 9, location.hostname.length) == '.download')) &&
			(nParam && nParam * 1) && location.href.indexOf("/lp/") > -1) {
            setReasonObj(REASON_URL, location.href);
            return reasonObj;
        }


        if ((location.hostname.substr(location.hostname.length - 9, location.hostname.length) == '.download') && location.href.indexOf("/static/lps/") > -1) {
            var hostArr = location.hostname.split('.'),
				installerParam = getQSParam("installer_id");

            if (hostArr.length == 3 && hostArr[1].length == 10 && installerParam && installerParam * 1) {
                setReasonObj(REASON_URL, location.href);
                return reasonObj;
            }
        }


        var phoneParam1 = getQSParam("phone"),
			phoneParam2 = getQSParam("phone2");
        if (phoneParam1 && phoneParam2 && phoneParam1.indexOf("1-855") > -1 && phoneParam2.indexOf("1-855") > -1) {
            setReasonObj(REASON_QUERYSTRING, location.search);
            return reasonObj;
        }

        var head = document.head;
        if (head) {
            if (head.getElementsByTagName('base').length) {
                var baseTag = head.getElementsByTagName('base')[0],
					baseHref = baseTag.getAttribute('href');
                if (baseHref && baseHref.indexOf('/page/hash/') > -1) {
                    setReasonObj(REASON_BASETAG, baseHref);
                    return reasonObj;
                }
            }
            var linkElements = head.getElementsByTagName('link'),
				isChromeStoreRef;
            for (var i = 0; i < linkElements.length; i++) {
                if (linkElements[i] && linkElements[i].getAttribute("rel") && linkElements[i].getAttribute("rel").indexOf("chrome-webstore") > -1) {
                    isChromeStoreRef = true;
                    var chromeStoreHref = linkElements[i].getAttribute("href");
                    if (chromeStoreHref && checkFilter(chromeStoreHref, chromeStoreIDs, REASON_CHROMESTOREID)) {
                        return reasonObj;
                    }
                }
                if (linkElements[i] && linkElements[i].getAttribute("href") && checkFilter(linkElements[i].getAttribute("href"), domains, REASON_LINKELEMENT_DOMAIN)) {
                    return reasonObj;
                }
            }
            /*
			// 15/04/18 [dudi] - Disabled the chrome extension reference and "search" term in title, due to false positives

			if (isChromeStoreRef && title.toLowerCase().indexOf("search") > -1) {
				setReasonObj(REASON_SEARCHCHROMEEXT, title);
				return reasonObj;
			}
			*/
        }

        var bodyOnclick = document.body.getAttribute("onclick");
        if (bodyOnclick && bodyOnclick.indexOf("xuypizda") > -1) {
            return reasonObj;
        }

        if (document.body.children.length > 1) {
            if (document.body.children.length > 3 && document.body.children[0].getAttribute("id") == "onClickShowloadingButton" && document.body.children[1].getAttribute("id") == "onClickShowSolutionButton" && document.body.children[2].getAttribute("id") == "onClickDownloadButton") {
                setReasonObj(REASON_DOMELEMENTS, document.body.children[0].getAttribute("id"));
                return reasonObj;
            }
            var lastElement = document.body.children.length - 1;
            if (
				(document.body.children[lastElement].className == "oc-extension-installer" && setReasonObj(REASON_DOMELEMENTS, document.body.children[lastElement].className)) ||
				(document.body.children[lastElement].id == "installationInstructions" && document.body.children[lastElement].children.length == 1 && document.body.children[lastElement].children[0].className == "instructions-container" && setReasonObj(REASON_DOMELEMENTS, document.body.children[lastElement].id))
			) {
                return reasonObj;
            }
        }

        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            var scr = scripts[i],
				scrSRC = scr.getAttribute("src");
            if (scrSRC && (checkFilter(scrSRC, domains, REASON_SCRIPTELEMENT_DOMAIN) || checkFilter(scrSRC, urlFilter, REASON_SCRIPTELEMENT_URL))) {
                return reasonObj;
            }
        }

        var bodyText = document.body.textContent.toLowerCase();

        for (var i = 0; i < phraseCombosFilter.length; i++) {
            var currentCombo = phraseCombosFilter[i], stringsFound = 0;
            for (var j = 0; j < currentCombo.length; j++) {
                var currentString = currentCombo[j];
                if (bodyText.indexOf(currentString) > -1) {
                    stringsFound++;
                } else {
                    break;
                }
            }
            if (stringsFound == currentCombo.length) {
                setReasonObj(REASON_PHRASECOMBO, currentCombo);
                return reasonObj;
            }
        }
        return false;
    }

    var isLPResult = isLP();

    if (isLPResult) {
        window.onbeforeunload = null;
        window.postMessage({
            "msg": "bp",
            "id": "45YhdOUjdn",
            "currentUrl": document["location"]["href"],
            "referrer": document["referrer"],
            "topDomain": isLPResult["topDomain"],
            "reasonId": isLPResult["id"],
            "reasonData": isLPResult["data"].join ? isLPResult["data"].join(", ") : isLPResult["data"],
            "version": isLPResult["ver"]
        }, "*");
    }
} catch (e) {

}
