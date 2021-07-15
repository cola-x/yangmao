GXRZ = '3.12完成'
const $ = Env("书旗小说");
$.idx = ($.idx = ($.getval('shuqiSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./shuqiCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
$.message = '', COOKIES_SPLIT = '', CASH = '', ddtime = '';
CZ = 10
Length = 0
       // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        let shuqiCount = ($.getval('shuqiCount') || '1') - 0;
        for (let i = 2; i <= shuqiCount; i++) {
            if ($.getdata(`shuqiuserurl${i}`)) {
                    const shuqijsbookurlVal = $request.url;
        if (shuqijsbookurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsbookurl' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsbookurlVal, "shuqijsbookurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版书城shuqijsbookurlVal✅: 成功,shuqijsbookurlVal: ${shuqijsbookurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版书城shuqijsbookurlVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }

    //获取极速版视频任务
    if ($request && $request.url.indexOf("getAdInfo") >= 0 && $request.url.indexOf("resourceId=719") >= 0 && $request.url.indexOf("appVer=1") >= 0) {

        const shuqijssprwurlVal = $request.url;
        if (shuqijssprwurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijssprwurl' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijssprwurlVal, "shuqijssprwurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版视频任务shuqijssprwurlVal✅: 成功,shuqijssprwurlVal: ${shuqijssprwurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版视频任务shuqijssprwurlVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }




    //获取极速版补签签到页
    if ($request && $request.url.indexOf("adserver") >= 0 && $request.url.indexOf("getAdInfo") >= 0 && $request.url.indexOf("resourceId=720") >= 0) {

        const shuqijsbqqdyurlVal = $request.url;
        if (shuqijsbqqdyurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsbqqdyurl' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsbqqdyurlVal, "shuqijsbqqdyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版补签签到页shuqijsbqqdyurlVal✅: 成功,shuqijsbqqdyurlVal: ${shuqijsbqqdyurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版补签签到页shuqijsbqqdyurlVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取抽奖页
    if ($request && $request.url.indexOf("lottery") >= 0 && $request.url.indexOf("info") >= 0) {

        const shuqicjyurlVal = $request.url;
        if (shuqicjyurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqicjyurl' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqicjyurlVal, "shuqicjyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖页shuqicjyurlVal✅: 成功,shuqicjyurlVal: ${shuqicjyurlVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖页shuqicjyurlVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取极速版签到视频页
    if ($request && $request.url.indexOf("adserver") >= 0 && $request.url.indexOf("getAdInfo") >= 0 && $request.url.indexOf("resourceId=717") >= 0) {

        const shuqijsqdspyurlVal = $request.url;
        if (shuqijsqdspyurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsqdspyurl' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsqdspyurlVal, "shuqijsqdspyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版签到视频页shuqijsqdspyurlVal✅: 成功,shuqijsqdspyurlVal: ${shuqijsqdspyurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版签到视频页shuqijsqdspyurlVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取视频任务
    if ($request && $request.url.indexOf("adserver") >= 0 && $request.url.indexOf("getAdInfo") >= 0 && $request.url.indexOf("resourceId=626") >= 0) {

        const shuqisprwurlVal = $request.url;
        if (shuqisprwurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqisprwurl' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqisprwurlVal, "shuqisprwurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取视频任务shuqisprwurlVal✅: 成功,shuqisprwurlVal: ${shuqisprwurlVal}`
                        );
                        $.msg($.name + $.idx, `获取视频任务shuqisprwurlVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取补签签到页
    if ($request && $request.url.indexOf("resourceId=615") >= 0 && $request.url.indexOf("appVer=4") >= 0) {

        const shuqibqqdyurlVal = $request.url;
        if (shuqibqqdyurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqibqqdyurl' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqibqqdyurlVal, "shuqibqqdyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取补签签到页shuqibqqdyurlVal✅: 成功,shuqibqqdyurlVal: ${shuqibqqdyurlVal}`
                        );
                        $.msg($.name + $.idx, `获取补签签到页shuqibqqdyurlVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取用户名
    if ($request && $request.url.indexOf("getBindinfo") >= 0) {

        const shuqiuserurlVal = $request.url;
        if (shuqiuserurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqiuserurl' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqiuserurlVal, "shuqiuserurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取用户名shuqiuserurlVal✅: 成功,shuqiuserurlVal: ${shuqiuserurlVal}`
                        );
                        $.msg($.name + $.idx, `获取用户名shuqiuserurlVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取收益
        const shuqisyurlVal = $request.url
        const shuqisybodyVal = $request.body
        if (shuqisyurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqisyurl' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqisyurlVal, "shuqisyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取收益shuqisyurlVal✅: 成功,shuqisyurlVal: $shuqisyurlVal}`
                        $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取视频
    if ($request && $request.url.indexOf("prize") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("deliveryId=525") >= 0) {

        const shuqispbodyVal = $request.body;
        if (shuqispbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqispbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqispbodyVal, "shuqispbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取视频shuqispbodyVal✅: 成功,shuqispbodyVal: ${shuqispbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取视频shuqispbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取时长
    if ($request && $request.url.indexOf("reading") >= 0 && $request.url.indexOf("upload") >= 0 && $request.body.indexOf("_public=skinId") >= 0) {

        const shuqiscbodyVal = $request.body;
        if (shuqiscbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqiscbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqiscbodyVal, "shuqiscbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取时长shuqiscbodyVal✅: 成功,shuqiscbodyVal: ${shuqiscbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取时长shuqiscbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取阅读
    if ($request && $request.url.indexOf("pendant") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("deliveryId=707") >= 0) {

        const shuqiydbodyVal = $request.body;
        if (shuqiydbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqiydbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqiydbodyVal, "shuqiydbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取阅读shuqiydbodyVal✅: 成功,shuqiydbodyVal: ${shuqiydbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取阅读shuqiydbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取签到
    if ($request && $request.url.indexOf("signInAction") >= 0 && $request.body.indexOf("position=501") >= 0 && $request.body.indexOf("signInType=1") >= 0) {

        const shuqiqdbodyVal = $request.body;
        if (shuqiqdbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqiqdbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqiqdbodyVal, "shuqiqdbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取签到shuqiqdbodyVal✅: 成功,shuqiqdbodyVal: ${shuqiqdbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取签到shuqiqdbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
        const shuqibqqdbodyVal = $request.body;
        if (shuqibqqdbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqibqqdbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqibqqdbodyVal, "shuqibqqdbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取补签签到shuqibqqdbodyVal✅: 成功,shuqibqqdbodyVal: ${shuqibqqdbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取补签签到shuqibqqdbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取任务
        const shuqirwbodyVal = $request.body;
        if (shuqirwbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqirwbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqirwbodyVal, "shuqirwbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取任务shuqirwbodyVal✅: 成功,shuqirwbodyVal: ${shuqirwbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取任务shuqirwbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取分享
    if ($request && $request.url.indexOf("activity") >= 0 && $request.url.indexOf("reward") >= 0 && $request.body.indexOf("actTaskId=304") >= 0) {

        const shuqifxbodyVal = $request.body;
        if (shuqifxbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqifxbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqifxbodyVal, "shuqifxbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取分享shuqifxbodyVal✅: 成功,shuqifxbodyVal: ${shuqifxbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取分享shuqifxbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
        const shuqijlbodyVal = $request.body;
        if (shuqijlbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijlbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijlbodyVal, "shuqijlbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取奖励shuqijlbodyVal✅: 成功,shuqijlbodyVal: ${shuqijlbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取奖励shuqijlbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取收取奖励
    if ($request && $request.url.indexOf("manual") >= 0 && $request.url.indexOf("receive") >= 0 && $request.body.indexOf("appVer=4") >= 0) {

        const shuqisqjlbodyVal = $request.body;
        if (shuqisqjlbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqisqjlbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqisqjlbodyVal, "shuqisqjlbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取收取奖励shuqisqjlbodyVal✅: 成功,shuqisqjlbodyVal: ${shuqisqjlbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取收取奖励shuqisqjlbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取每日阅读
    if ($request && $request.url.indexOf("boxTask") >= 0 && $request.url.indexOf("activityId=309") >= 0 && $request.body.indexOf("actTaskId") >= 0) {

        const shuqimrydbodyVal = $request.body;
        if (shuqimrydbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqimrydbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqimrydbodyVal, "shuqimrydbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取每日阅读shuqimrydbodyVal✅: 成功,shuqimrydbodyVal: ${shuqimrydbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取每日阅读shuqimrydbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
        const shuqicjcsbodyVal = $request.body;
        if (shuqicjcsbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqicjcsbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqicjcsbodyVal, "shuqicjcsbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖次数shuqicjcsbodyVal✅: 成功,shuqicjcsbodyVal: ${shuqicjcsbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖次数shuqicjcsbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
        const shuqicjbodyVal = $request.body;
        if (shuqicjbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqicjbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqicjbodyVal, "shuqicjbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖shuqicjbodyVal✅: 成功,shuqicjbodyVal: ${shuqicjbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖shuqicjbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取极速版视频
    if ($request && $request.url.indexOf("prize") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("resourceId=719") >= 0) {

        const shuqijsspbodyVal = $request.body;
        if (shuqijsspbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsspbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsspbodyVal, "shuqijsspbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版视频shuqijsspbodyVal✅: 成功,shuqijsspbodyVal: ${shuqijsspbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版视频shuqijsspbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
        const shuqijsqdspbodyVal = $request.body;
        if (shuqijsqdspbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsqdspbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsqdspbodyVal, "shuqijsqdspbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版签到视频shuqijsqdspbodyVal✅: 成功,shuqijsqdspbodyVal: ${shuqijsqdspbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版签到视频shuqijsqdspbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
        const shuqijsydurlVal = $request.url;
        const shuqijsydbodyVal = $request.body;
        if (shuqijsydurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsydurl' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsydurlVal, "shuqijsydurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版阅读shuqijsydurlVal✅: 成功,shuqijsydurlVal: ${shuqijsydurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版阅读shuqijsydbodyVal: 成功🎉`, ``);
                        $.done();
                    }
                };
            }
        }
    }
    //获取极速版签到
    if ($request && $request.url.indexOf("signInAction") >= 0 && $request.body.indexOf("position=601") >= 0 && $request.body.indexOf("signInType=1") >= 0) {

        const shuqijsqdbodyVal = $request.body;
        if (shuqijsqdbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsqdbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsqdbodyVal, "shuqijsqdbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版签到shuqijsqdbodyVal✅: 成功,shuqijsqdbodyVal: ${shuqijsqdbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版签到shuqijsqdbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
        const shuqijsbqqdbodyVal = $request.body;
        if (shuqijsbqqdbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsbqqdbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsbqqdbodyVal, "shuqijsbqqdbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版补签签到shuqijsbqqdbodyVal✅: 成功,shuqijsbqqdbodyVal: ${shuqijsbqqdbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版补签签到shuqijsbqqdbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取极速版任务
    if ($request && $request.url.indexOf("resource") >= 0 && $request.body.indexOf("resources") >= 0 && $request.body.indexOf("appVer=1") >= 0) {

        const shuqijsrwbodyVal = $request.body;
        if (shuqijsrwbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsrwbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsrwbodyVal, "shuqijsrwbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版任务shuqijsrwbodyVal✅: 成功,shuqijsrwbodyVal: ${shuqijsrwbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版任务shuqijsrwbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //获取极速版分享
    if ($request && $request.body.indexOf("actTaskId=327") >= 0 && $request.body.indexOf("appVer=1") >= 0) {

        const shuqijsfxbodyVal = $request.body;
        if (shuqijsfxbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsfxbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsfxbodyVal, "shuqijsfxbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版分享shuqijsfxbodyVal✅: 成功,shuqijsfxbodyVal: ${shuqijsfxbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版分享shuqijsfxbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }

    //获取极速版书城
    if ($request && $request.url.indexOf("convert") >= 0 && $request.body.indexOf("actTaskId=344") >= 0 && $request.body.indexOf("appVer=1") >= 0) {

        const shuqijsbookbodyVal = $request.body;
        if (shuqijsbookbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('shuqijsbookbody' + $.idx);
                if (bodys) {
                    if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(shuqijsbookbodyVal, "shuqijsbookbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版书城shuqijsbookbodyVal✅: 成功,shuqijsbookbodyVal: ${shuqijsbookbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版书城shuqijsbookbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }


}
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
        }

        if (shuqicjyurlVal && shuqicjyurlVal != '') {
            await lotteryinfo(); //抽奖页
        }
                        signss = $.resource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 102);
                        sharess = $.resource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 18);

                        console.log(`${readss.taskTitle}：${readss.rewards[0].desc}\n${signss.taskTitle}：${signss.rewards[0].desc}\n${sharess.taskTitle}：${sharess.rewards[0].desc}\n`);
                        $.message += `【${readss.taskTitle}】：${readss.rewards[0].desc}\n【${signss.taskTitle}】：${signss.rewards[0].desc}\n【${sharess.taskTitle}】：${sharess.rewards[0].desc}\n`;
                    }
                    if (shuqiydbodyVal && shuqiydbodyVal != '' && readss.status == 0) {

                        await reads(); //阅读奖励
                        await $.wait(46000)

                    }

                    if (shuqiqdbodyVal && shuqiqdbodyVal != '' && signss.status == 0) {
                        await sign(); //每日签到
                    }
                    if (shuqifxbodyVal && shuqifxbodyVal != '' && sharess.status == 0) {
                        taskfx = `reward`
                        await share(); //每日分享
                    }
                    if (shuqifxbodyVal && shuqifxbodyVal != '' && sharess.status == 2 && sharess.prizeStatus == 4) {
                        taskfx = `convert`
                        await share(); //分享领奖
                    }
                } catch (e) {
                    $.logErr(e, resp);
    //抽奖页
    function lotteryinfo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 抽奖页🚩: ${decodeUnicode(data)}`);
                    $.lotteryinfo = JSON.parse(data);
                    if ($.lotteryinfo.status == 200) {
                        console.log(`抽奖页：${$.lotteryinfo.data.actInfo.totalNum}/${$.lotteryinfo.data.actInfo.dailyLotteryLimit}\n`);
                        $.message += `【抽奖页】：${$.lotteryinfo.data.actInfo.totalNum}/${$.lotteryinfo.data.actInfo.dailyLotteryLimit}\n`;

                        if (shuqicjcsbodyVal && shuqicjcsbodyVal != '' && $.lotteryinfo.data.actInfo.totalNum < $.lotteryinfo.data.actInfo.dailyLotteryLimit) {
                            await prizelottery(); //抽奖次数
                        jsbookss = $.jsresource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 23);
                        jssharess = $.jsresource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 18);

                        console.log(`${jsreadss.taskTitle}：${jsreadss.rewards[0].desc}\n${jssignss.taskTitle}：${jssignss.rewards[0].desc}\n${jsbookss.taskTitle}：${jsbookss.rewards[0].desc}\n${jssharess.taskTitle}：${jssharess.rewards[0].desc}\n`);
                        $.message += `【${jsreadss.taskTitle}】：${jsreadss.rewards[0].desc}\n【${jssignss.taskTitle}】：${jssignss.rewards[0].desc}\n【${jsbookss.taskTitle}】：${jsbookss.rewards[0].desc}\n【${jssharess.taskTitle}】：${jssharess.rewards[0].desc}\n`;
                    }
                    if (shuqijsydbodyVal && shuqijsydbodyVal != '' && jsreadss.status == 0) {
                        await jsreads(); //极速版阅读奖励
                        await $.wait(46000)
                    }

                    if (shuqijsqdbodyVal && shuqijsqdbodyVal != '' && jssignss.status == 0) {
                        await jssign(); //极速版每日签到
                    }
                    if (shuqijsfxbodyVal && shuqijsfxbodyVal != '' && jssharess.status == 0) {
                        taskfx == `reward`
                        await jsshare(); //极速版每日分享
                    }
                    if (shuqijsfxbodyVal && shuqijsfxbodyVal != '' && jssharess.status == 2 && jssharess.prizeStatus == 4) {
                        taskfx == `convert`
                        await share(); //极速版分享领奖
                    }
                    if (shuqijsbookurlVal && shuqijsbookurlVal != '' && jsbookss.status == 0) {
                        await jsbooklist(); //极速版每日书城
                    }
                    if (shuqijsbookbodyVal && shuqijsbookbodyVal != '' && jsbookss.status == 2 && jsbookss.prizeStatus == 4) {
                        await jsbooklj(); //极速版书城领奖
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
