function SIGNUM() {

    SIGNUM.prototype.define = function SIGNUM() {
        this.nu = -1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["signum"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.nu]);
        model.out = new ScilabDouble([this.nu]);
        model.nzcross = new ScilabDouble([this.nu]);
        model.nmode = new ScilabDouble([this.nu]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SIGNUM\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    SIGNUM.prototype.details = function SIGNUM() {
        return this.x;
    }
}

