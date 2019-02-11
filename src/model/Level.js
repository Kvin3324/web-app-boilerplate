class Level {
    constructor(level) {
        this.level = level;
        this.levelTab = [];
    }
    getLevel() {
        return this.level;
    }
    getLevelTab() {
        return this.levelTab;
    }
    setLevelTab(level) {
    this.levelTab.push(level);
    }  
}

export const nextLevel = new Level(1);


