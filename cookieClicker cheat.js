//javascript
/* eslint: enabled */

Game._quit = function(){Game.WriteSave();window.location.reload()};
if (!confirm("Are thou sure to lose thou sanity?")) Game._quit();

Game.popups=0;

//ad removal
const topBar = document.getElementById('topBar');
document.querySelector('div[class=ifNoAds]').hidden = true;
document.getElementById('smallSupport').hidden=true;
topBar.hidden = true;
showAds = false;

// Game.RuinTheFun
			Game.SetAllUpgrades(1);
			Game.SetAllAchievs(1);
			Game.MaxSpecials();
			Game.nextResearch=0;
			Game.researchT=-1;
			Game.upgradesToRebuild=1;
			Game.recalculateGains=1;

//Other cheats
Game.killShimmers();
Game.OpenSesame();

//Body popup.
((bodyClick)=>{
    document.body.onclick = function() {
        Game.popups=1;
        Game.Popup("Thou lose sanity?", window.screen.availWidth/2, window.screen.availHeight/2);
        Game.popups=0;
        document.body.onclick = bodyClick; //<-- reset onclick event to old one.
    }
})(document.body.onclick);

//Change branding and bakerydisplay name.
Game.bakeryNameL.innerHTML = "<b>A sour taste finds it way to you.</b>"
topBar.innerText = "";
topBar.innerHTML = "<b>Taste of a cheater.</b>"
topBar.hidden = false;

//Ruin and overwrite save
Game.ascendContentl.saveData = {
    version: Game.version,
    dat: Game.localStorageGet(Game.SaveTo)
}; //<-- If found they can restore there original save 😎
Game.version = ((((5<<Math.floor(Game.version<<2)))*3)**2/51).toPrecision(10); //<-- Makes save invalid 🤣
Game.ascendContentl.saveData.saveOverride = (function(){
    Game.version = Game.ascendContentl.saveData.version;
    Game.WriteSave();
});
Game.WriteSave();