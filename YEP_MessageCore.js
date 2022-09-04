//=============================================================================
// Yanfly Engine Plugins - Message Core
// YEP_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_MessageCore = true;

var Yanfly = Yanfly || {};
Yanfly.Message = Yanfly.Message || {};
Yanfly.Message.version = 1.19;

//=============================================================================
 /*:
 * @plugindesc v1.19 在消息窗口中添加更多功能以自定义
 * 信息的显示方式和功能。
 * @author Yanfly Engine Plugins制作 , Banner改进，狗狗群主汉化
 *
 * @param ---General---
 * @default
 *
 * @param Default Rows
 * @parent ---General---
 * @type number
 * @min 0
 * @desc 这是消息框的默认行数。
 * 默认值：4
 * @default 4
 *
 * @param Default Width
 * @parent ---General---
 * @desc 这是消息框的默认宽度（以像素为单位）。
 * 默认: Graphics.boxWidth
 * @default Graphics.boxWidth
 *
 * @param Face Indent
 * @parent ---General---
 * @desc 如果使用小头像图形，这是文本的缩进量。
 * 默认: Window_Base._faceWidth + 24
 * @default Window_Base._faceWidth + 24
 *
 * @param Fast Forward Key
 * @parent ---General---
 * @type combo
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc 这是用于快速跳过文章的快捷键。
 * @default pagedown
 *
 * @param Enable Fast Forward
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 默认情况下启用快速跳过文章的快进按钮？
 * NO - false     YES - true
 * @default true
 *
 * @param Word Wrapping
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 默认情况下，使用此选项可启用或禁用自动换行。
 * OFF - false     ON - true
 * @default false
 *
 * @param Description Wrap
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 启用或禁用描述的换行。
 * OFF - false     ON - true
 * @default false
 *
 * @param Word Wrap Space
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 插入带有手动换行符的空格？
 * NO - false     YES - true
 * @default false
 *
 * @param Tight Wrap
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 如果值为true并且消息使用小头像，则消息的间隔将更紧。
 * NO - false     YES - true
 * @default false
 *
 * @param ---Font---
 * @default
 *
 * @param Font Name
 * @parent ---Font---
 * @desc 这是消息窗口使用的默认字体。
 * Default: GameFont
 * @default GameFont
 *
 * @param Font Name CH
 * @parent ---Font---
 * @desc 这是中文消息窗口的默认字体。
 * Default: SimHei, Heiti TC, sans-serif
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param Font Name KR
 * @parent ---Font---
 * @desc 这是韩语消息窗口的默认字体。
 * Default: Dotum, AppleGothic, sans-serif
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param Font Size
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 这是消息窗口使用的默认字体大小。
 * Default: 28
 * @default 28
 *
 * @param Font Size Change
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 无论何时使用 \{ 和 \} 符号，它们都会按此值进行调整。
 * Default: 12
 * @default 12
 *
 * @param Font Changed Max
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 这是 \{ 符号达到的最大大小。
 * Default: 96
 * @default 96
 *
 * @param Font Changed Min
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 这是 \{ 符号达到的最小大小。
 * Default: 12
 * @default 12
 *
 * @param Font Outline
 * @parent ---Font---
 * @type number
 * @min 0
 * @desc 文字默认字体宽度。
 * Default: 4
 * @default 4
 *
 * @param Maintain Font
 * @parent ---Font---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 更改字体名称或大小时，为之后消息保留这个状态。
 * messages. NO - false     YES - true
 * @default false
 *
 * @param ---Name Box---
 * @default
 *
 * @param Name Box Buffer X
 * @parent ---Name Box---
 * @type number
 * @desc 这是名称框x位置离文本框的缓冲区。
 * @default -28
 *
 * @param Name Box Buffer Y
 * @parent ---Name Box---
 * @type number
 * @desc 这是名称框y位置离文本框的缓冲区。
 * @default 0
 *
 * @param Name Box Padding
 * @parent ---Name Box---
 * @desc 这是名称框的填充值。
 * @default this.standardPadding() * 4
 *
 * @param Name Box Color
 * @parent ---Name Box---
 * @type number
 * @min 0
 * @max 31
 * @desc 这是用于名称框的文本颜色。
 * @default 0
 *
 * @param Name Box Clear
 * @parent ---Name Box---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 是否希望“名称框”窗口保持清晰？
 * NO - false     YES - true
 * @default false
 *
 * @param Name Box Added Text
 * @parent ---Name Box---
 * @desc 无论何时使用“名称”框，都会添加此文本。
 * 这可以用来自动设置颜色。
 * @default \c[6]
 *
 * @param Name Box Auto Close
 * @parent ---Name Box---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 每次名称框显示不同的名称时关闭消息窗口？
 * YES - true     NO - false
 * @default false
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 * 虽然RPG Maker MV Ace确实对消息系统进行了很大的改进，
 * 但代码可以再增加一些功能，比如名称窗口，
 * 转换文本代码以写出更炫酷的物品、武器、防具的图标（和/或）名称。
 * 这个脚本还为开发人员提供了在游戏中调整消息窗口大小的功能, 
 * 给它一个单独的字体。给玩家一个文本快进功能。
 *
 * ============================================================================
 * 自动换行
 * ============================================================================
 *
 * 现在可以通过消息系统进行换行。可以使用插件命令启用和禁用自动换行。
 * 使用自动换行时，如果有文字显示扩展到消息窗口区域之外，
 * 它将自动转到下一行。但是，自动换行将禁用编辑器的换行符，
 * 并要求您使用插件提供的换行符：
 *
 * <br> 或者 <line break> 是应用换行符的文章代码。
 * 在要开始新行的文字之前或之后使用此选项。
 *
 * 请记住，换行主要用于消息窗口。
 * 但是, 在其他你想要看到换行的地方，例如项目描述，
 * 就在文章的开头插入<WordWrap>以启用它。
 *
 * ============================================================================
 * 文章代码
 * ============================================================================
 *
 * 通过在文章中使用特定的文本代码，你可以在游戏中用以下内容替换它们：
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * 文章代码      功能
 *   \V[n]       显示第n个变量的值。
 *   \N[n]       显示第n个角色的名字。
 *   \P[n]       显示为第n个队伍成员的名字。
 *   \G          显示货币数量。
 *   \C[n]       用第n种颜色绘制之后文本。
 *   \I[n]       显示第n个图标。
 *   \{          增大一号文字大小。
 *   \}          减少一号文字大小。
 *   \\          反斜杠的文字。
 *   \$          打开金钱窗口。
 *   \.          等待1/4秒。
 *   \|          等待1秒。
 *   \!          等待按钮按下。
 *   \>          在同一行显示文字。
 *   \<          取消显示所有文字。
 *   \^          显示文本后不要等待。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  等待:       效果:
 *    \w[x]     - 等待 x 帧(60 帧 = 1 秒)。仅消息窗口。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  名称窗口:   效果:
 *    \n<x>     - 左侧创建带有 x 字符串的名称框。*注意
 *    \nc<x>    - 居中创建带有 x 字符串的名称框。*注意
 *    \nr<x>    - 右侧创建带有 x 字符串的名称框。*注意
 *
 *              *注意: 仅适用于消息窗口。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  换行符      效果:
 *    <br>      - 如果使用自动换行模式，这将导致换行。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  位置:       效果:
 *    \px[x]    - 将文本的x位置设置为 x 。
 *    \py[x]    - 将文本的y位置设置为 y 。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  轮廓:       效果:
 *   \oc[x]     - 将轮廓颜色设置为 x 。
 *   \ow[x]     - 将轮廓宽度设置为 x 。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  字体:       效果:
 *    \fr       - 重置所有字体更改。
 *    \fs[x]    - 将字体大小更改为 x 。
 *    \fn<x>    - 将字体名称更改为 x 。
 *    \fb       - 切换字体粗体。
 *    \fi       - 切换字体斜体。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  角色:       效果:
 *    \af[x]    - 显示角色 x 的脸图。*注意
 *    \ac[x]    - 显示角色的职业。
 *    \an[x]    - 显示角色的昵称。
 *
 *              *注意: 仅适用于消息窗口。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  队伍:      效果:
 *    \pf[x]    - 显示队伍成员 x 的脸图。*注意
 *    \pc[x]    - 显示队伍成员 x 的职业。
 *    \pn[x]    - 显示队伍成员 x 的昵称。
 *
 *              *注意: 仅适用于消息窗口。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  名字:      效果:
 *    \nc[x]    - 显示职业 x 的名字。
 *    \ni[x]    - 显示物品 x 的名字。
 *    \nw[x]    - 显示武器 x 的名字。
 *    \na[x]    - 显示装备 x 的名字。
 *    \ns[x]    - 显示技能 x 的名字。
 *    \nt[x]    - 显示状态 x 的名字。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *  图片名称:  效果:
 *    \ii[x]    - 显示 x 的物品名包括图标。
 *    \iw[x]    - 显示 x 的武器名包括图标。
 *    \ia[x]    - 显示 x 的装备名包括图标。
 *    \is[x]    - 显示 x 的技能名包括图标。
 *    \it[x]    - 显示 x 的状态名包括图标。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * 这些文本代码已经添加进了脚本。
 * 请注意这里面有一部分文本代码只能用于消息框。
 * 然后其他的代码,它们可以帮助描述剧情、角色传记或者其他的文本。
 *
 * ============================================================================
 * 插件命令
 * ============================================================================
 *
 * 你可以通过事件编辑器使用下面这些插件命令来从很多方面改变信息系统。
 *
 * 插件命令
 *   消息行数 6
 *   - 将信息可显示行数改为6行。如果你连续使用显示文本的事件，
 *   这将导致文本会一直在框内显示直到达到设定上限。
 *   在这之后的文字将会在下一个文本框开始的时候显示，
 *   以免造成不必要的重叠。
 *
 *   文本宽度 400
 *   - 将文本框宽度改为400像素。
 *   这将删除任何显示超过400像素的太靠右的单词，所以要相应调整！
 *
 *   启用文字换行
 *   - 启用文字换行。如果一个单词超出了窗口大小，它将自动移到下一行。
 *   记住，你需要使用\br指令符来执行换行。
 *
 *   关闭文字换行
 *   - 关闭文字换行。在编辑器中新行开始的位置输入指令符将自动换行。
 *   
 *   启动文本快进
 *   - 启动快进键以处理文字信息。
 *
 *   关闭文本快进
 *   - 关闭加速键以处理文字信息。
 *
 * ============================================================================
 * 更新日志
 * ============================================================================
 *
 * 版本 1.19:
 * - 为RPG Maker MV 1.5.0版做出更新。
 *
 * 版本 1.18:
 * - 添加了新的插件参数：“Font Name CH”和“Font Name KR”。
 *
 * 版本 1.17:
 * - 关于“名称框自动关闭”选项的消息宏的兼容性更新。
 *
 * 版本 1.16:
 * - 添加了'Tight Wrap'插件参数作为自动换行选项，
 * 在使用头像时使换行更紧密。
 *
 * 版本 1.15:
 * - 添加了一个故障保护，
 * 如果名称框窗口将不在屏幕上将自动重新定位到主消息窗口下。
 *
 * 版本 1.14:
 * - 添加了“Name Box Close”插件参数。如果启用此选项，
 * 则会在每次出现后续消息时，都会检查窗口发言人的名称。
 * 如果当前名称窗口中的名称与以下名称窗口中的名称匹配，
 * 消息窗口将保持打开状态。如果没有，
 * 姓名窗口将关闭并重新打开，以指示新的发言人。
 *
 * 版本 1.13:
 * - 在字体类别下添加了“Maintain Font”插件参数。
 * 它将会允许您使用文本代码\fn<x>和\fs[x]
 * 永久更改文本字体直到再次使用为止。
 * \fr将重置它们为插件的默认参数设置。
 *
 * 版本 1.12:
 * - '自动换行空格'参数不再在每条消息的开头留下空格。
 *
 * 版本 1.11:
 * - 为插件参数添加了“Font Outline”参数。
 * 这将调整默认情况下仅用于消息字体的字体轮廓宽度。
 *
 * 版本 1.10:
 * - 更新了消息行系统关于扩展消息包1的自动调整大小功能，以适应扩展高度。
 * 
 * 版本 1.09:
 * - 使用“快进键”参数以及“启用快进”参数取代了“快进”参数 
 * 添加了两个新的插件命令。它们是“EnableFastForward”和“DisableFastForward”，
 * 用于控制何时允许快进文本，以免导致定时剪切场景不同步。
 * 
 * 版本 1.08:
 * - 修正了当消息窗口的位置在中间时，关于输入号定位的错误。
 *
 * 版本 1.07:
 * - 为自动换行用户添加了“换行空间”。
 * 此参数将为那些希望留下空间的人留下一个空间。
 *
 * 版本 1.06:
 * - 修正了一个会导致移动设备屏蔽问题的错误。
 *
 * 版本 1.05:
 * - 修复了一个会导致名称框窗口出现扭曲的错误。
 *
 * 版本 1.04:
 * - 修正了用名称框窗口捕获太多文本代码的错误。
 * - 添加时间调整名称窗口的关闭速度与主窗口的关闭速度。
 *
 * Verison 1.03:
 * - 修正了一个错误扰乱了自动换行的文本代码。
 * - 修正了字体重置、斜体和粗体文本代码的错误。
 *
 * 版本 1.02:
 * - 名称框窗口在每个MV窗口中的重叠特性现在被禁用，
 * 以允许与主消息窗口重叠。
 * - 更新窗口定位关于分支选择、编号输入和项目选择窗口。
 *
 * 版本 1.01:
 * - 在参数中添加了“Description Wrap”，
 * 以允许自动使用自动换行处理所有项目描述。
 *
 * 版本 1.00:
 * - 完成插件!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_MessageCore');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.MSGDefaultRows = String(Yanfly.Parameters['Default Rows']);
Yanfly.Param.MSGDefaultWidth = String(Yanfly.Parameters['Default Width']);
Yanfly.Param.MSGFaceIndent = String(Yanfly.Parameters['Face Indent']);
Yanfly.Param.MSGFastForwardKey = String(Yanfly.Parameters['Fast Forward Key']);
Yanfly.Param.MSGFFOn = eval(String(Yanfly.Parameters['Enable Fast Forward']));
Yanfly.Param.MSGWordWrap = String(Yanfly.Parameters['Word Wrapping']);
Yanfly.Param.MSGWordWrap = eval(Yanfly.Param.MSGWordWrap);
Yanfly.Param.MSGDescWrap = String(Yanfly.Parameters['Description Wrap']);
Yanfly.Param.MSGWrapSpace = eval(String(Yanfly.Parameters['Word Wrap Space']));
Yanfly.Param.MSGTightWrap = eval(String(Yanfly.Parameters['Tight Wrap']));

Yanfly.Param.MSGFontName = String(Yanfly.Parameters['Font Name']);
Yanfly.Param.MSGCNFontName = String(Yanfly.Parameters['Font Name CH']);
Yanfly.Param.MSGKRFontName = String(Yanfly.Parameters['Font Name KR']);
Yanfly.Param.MSGFontSize = Number(Yanfly.Parameters['Font Size']);
Yanfly.Param.MSGFontSizeChange = String(Yanfly.Parameters['Font Size Change']);
Yanfly.Param.MSGFontChangeMax = String(Yanfly.Parameters['Font Changed Max']);
Yanfly.Param.MSGFontChangeMin = String(Yanfly.Parameters['Font Changed Min']);
Yanfly.Param.MSGFontOutline = Number(Yanfly.Parameters['Font Outline']);
Yanfly.Param.MSGFontMaintain = eval(String(Yanfly.Parameters['Maintain Font']));

Yanfly.Param.MSGNameBoxBufferX = String(Yanfly.Parameters['Name Box Buffer X']);
Yanfly.Param.MSGNameBoxBufferY = String(Yanfly.Parameters['Name Box Buffer Y']);
Yanfly.Param.MSGNameBoxPadding = String(Yanfly.Parameters['Name Box Padding']);
Yanfly.Param.MSGNameBoxColor = Number(Yanfly.Parameters['Name Box Color']);
Yanfly.Param.MSGNameBoxClear = String(Yanfly.Parameters['Name Box Clear']);
Yanfly.Param.MSGNameBoxText = String(Yanfly.Parameters['Name Box Added Text']);
Yanfly.Param.MSGNameBoxClose = String(Yanfly.Parameters['Name Box Auto Close']);
Yanfly.Param.MSGNameBoxClose = eval(Yanfly.Param.MSGNameBoxClose);

//=============================================================================
// Bitmap
//=============================================================================

Yanfly.Message.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
    Yanfly.Message.Bitmap_initialize.call(this, width, height);
    this.fontBold = false;
};

Yanfly.Message.Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
Bitmap.prototype._makeFontNameText = function() {
    if (this.fontBold) return 'Bold ' + this.fontSize + 'px ' + this.fontFace;
    return Yanfly.Message.Bitmap_makeFontNameText.call(this);
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.Message.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.Message.Game_System_initialize.call(this);
    this.initMessageSystem();
    this.initMessageFontSettings();
};

Game_System.prototype.initMessageSystem = function() {
    this._wordWrap = Yanfly.Param.MSGWordWrap;
    this._fastForward = Yanfly.Param.MSGFFOn;
};

Game_System.prototype.initMessageFontSettings = function() {
    if ($dataSystem.locale.match(/^zh/)) {
      this._msgFontName = Yanfly.Param.MSGCNFontName;
    } else if ($dataSystem.locale.match(/^ko/)) {
      this._msgFontName = Yanfly.Param.MSGKRFontName;
    } else {
      this._msgFontName = Yanfly.Param.MSGFontName;
    }
    this._msgFontSize = Yanfly.Param.MSGFontSize;
    this._msgFontOutline = Yanfly.Param.MSGFontOutline;
};

Game_System.prototype.messageRows = function() {
    var rows = eval(this._messageRows) || eval(Yanfly.Param.MSGDefaultRows);
    return Math.max(1, Number(rows));
};

Game_System.prototype.messageWidth = function() {
    return eval(this._messageWidth) || eval(Yanfly.Param.MSGDefaultWidth);
};

Game_System.prototype.wordWrap = function() {
    if (this._wordWrap === undefined) this.initMessageSystem();
    return this._wordWrap;
};

Game_System.prototype.setWordWrap = function(state) {
    if (this._wordWrap === undefined) this.initMessageSystem();
    this._wordWrap = state;
};

Game_System.prototype.isFastFowardEnabled = function() {
    if (this._fastForward === undefined) this.initMessageSystem();
    return this._fastForward;
};

Game_System.prototype.setFastFoward = function(state) {
    if (this._fastForward === undefined) this.initMessageSystem();
    this._fastForward = state;
};

Game_System.prototype.getMessageFontName = function() {
    if (this._msgFontName === undefined) this.initMessageFontSettings();
    return this._msgFontName;
};

Game_System.prototype.setMessageFontName = function(value) {
    if (this._msgFontName === undefined) this.initMessageFontSettings();
    this._msgFontName = value;
};

Game_System.prototype.getMessageFontSize = function() {
    if (this._msgFontSize === undefined) this.initMessageFontSettings();
    return this._msgFontSize;
};

Game_System.prototype.setMessageFontSize = function(value) {
    if (this._msgFontSize === undefined) this.initMessageFontSettings();
    this._msgFontSize = value;
};

Game_System.prototype.getMessageFontOutline = function() {
    if (this._msgFontOutline === undefined) this.initMessageFontSettings();
    return this._msgFontOutline;
};

Game_System.prototype.setMessageFontOutline = function(value) {
    if (this._msgFontOutline === undefined) this.initMessageFontSettings();
    this._msgFontOutline = value;
};

//=============================================================================
// Game_Message
//=============================================================================

Game_Message.prototype.addText = function(text) {
    if ($gameSystem.wordWrap()) text = '<WordWrap>' + text;
    this.add(text);
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.Message.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.Message.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'MessageRows') $gameSystem._messageRows = args[0];
    if (command === 'MessageWidth') $gameSystem._messageWidth = args[0];
    if (command === 'EnableWordWrap') $gameSystem.setWordWrap(true);
    if (command === 'DisableWordWrap') $gameSystem.setWordWrap(false);
    if (command === 'EnableFastForward') $gameSystem.setFastFoward(true);
    if (command === 'DisableFastForward') $gameSystem.setFastFoward(false);
};

Game_Interpreter.prototype.command101 = function() {
    if (!$gameMessage.isBusy()) {
      $gameMessage.setFaceImage(this._params[0], this._params[1]);
      $gameMessage.setBackground(this._params[2]);
      $gameMessage.setPositionType(this._params[3]);
      while (this.isContinueMessageString()) {
        this._index++;
        if (this._list[this._index].code === 401) {
          $gameMessage.addText(this.currentCommand().parameters[0]);
        }
        if ($gameMessage._texts.length >= $gameSystem.messageRows()) break;
      }
      switch (this.nextEventCode()) {
      case 102:
        this._index++;
        this.setupChoices(this.currentCommand().parameters);
        break;
      case 103:
        this._index++;
        this.setupNumInput(this.currentCommand().parameters);
        break;
      case 104:
        this._index++;
        this.setupItemChoice(this.currentCommand().parameters);
        break;
      }
      this._index++;
      this.setWaitMode('message');
    }
    return false;
};

Game_Interpreter.prototype.isContinueMessageString = function() {
    if (this.nextEventCode() === 101 && $gameSystem.messageRows() > 4) {
      return true;
    } else {
      return this.nextEventCode() === 401;
    }
};

//=============================================================================
// Window_Base
//=============================================================================

Yanfly.Message.Window_Base_resetFontSettings =
    Window_Base.prototype.resetFontSettings;
Window_Base.prototype.resetFontSettings = function() {
    Yanfly.Message.Window_Base_resetFontSettings.call(this);
    this.contents.fontBold = false;
    this.contents.fontItalic = false;
    this.contents.outlineColor = 'rgba(0, 0, 0, 0.5)';
    this.contents.outlineWidth = $gameSystem.getMessageFontOutline();
};

Window_Base.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height + this.lineHeight());
};

Yanfly.Message.Window_Base_convertEscapeCharacters =
    Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = this.setWordWrap(text);
    text = Yanfly.Message.Window_Base_convertEscapeCharacters.call(this, text);
    text = this.convertExtraEscapeCharacters(text);
    return text;
};

Window_Base.prototype.setWordWrap = function(text) {
    this._wordWrap = false;
    if (text.match(/<(?:WordWrap)>/i)) {
      this._wordWrap = true;
      text = text.replace(/<(?:WordWrap)>/gi, '');
    }
    if (this._wordWrap) {
      var replace = Yanfly.Param.MSGWrapSpace ? ' ' : '';
      text = text.replace(/[\n\r]+/g, replace);
    }
    if (this._wordWrap) {
      text = text.replace(/<(?:BR|line break)>/gi, '\n');
    } else {
      text = text.replace(/<(?:BR|line break)>/gi, '');
    }
    return text;
};

Window_Base.prototype.convertExtraEscapeCharacters = function(text) {
    // Font Codes
    text = text.replace(/\x1bFR/gi, '\x1bMSGCORE[0]');
    text = text.replace(/\x1bFB/gi, '\x1bMSGCORE[1]');
    text = text.replace(/\x1bFI/gi, '\x1bMSGCORE[2]');
    // \AC[n]
    text = text.replace(/\x1bAC\[(\d+)\]/gi, function() {
        return this.actorClassName(parseInt(arguments[1]));
    }.bind(this));
    // \AN[n]
    text = text.replace(/\x1bAN\[(\d+)\]/gi, function() {
        return this.actorNickname(parseInt(arguments[1]));
    }.bind(this));
    // \PC[n]
    text = text.replace(/\x1bPC\[(\d+)\]/gi, function() {
        return this.partyClassName(parseInt(arguments[1]));
    }.bind(this));
    // \PN[n]
    text = text.replace(/\x1bPN\[(\d+)\]/gi, function() {
        return this.partyNickname(parseInt(arguments[1]));
    }.bind(this));
    // \NC[n]
    text = text.replace(/\x1bNC\[(\d+)\]/gi, function() {
        return $dataClasses[parseInt(arguments[1])].name;
    }.bind(this));
    // \NI[n]
    text = text.replace(/\x1bNI\[(\d+)\]/gi, function() {
        return $dataItems[parseInt(arguments[1])].name;
    }.bind(this));
    // \NW[n]
    text = text.replace(/\x1bNW\[(\d+)\]/gi, function() {
        return $dataWeapons[parseInt(arguments[1])].name;
    }.bind(this));
    // \NA[n]
    text = text.replace(/\x1bNA\[(\d+)\]/gi, function() {
        return $dataArmors[parseInt(arguments[1])].name;
    }.bind(this));
    // \NE[n]
    text = text.replace(/\x1bNE\[(\d+)\]/gi, function() {
        return $dataEnemies[parseInt(arguments[1])].name;
    }.bind(this));
    // \NS[n]
    text = text.replace(/\x1bNS\[(\d+)\]/gi, function() {
        return $dataSkills[parseInt(arguments[1])].name;
    }.bind(this));
    // \NT[n]
    text = text.replace(/\x1bNT\[(\d+)\]/gi, function() {
        return $dataStates[parseInt(arguments[1])].name;
    }.bind(this));
    // \II[n]
    text = text.replace(/\x1bII\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataItems);
    }.bind(this));
    // \IW[n]
    text = text.replace(/\x1bIW\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataWeapons);
    }.bind(this));
    // \IA[n]
    text = text.replace(/\x1bIA\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataArmors);
    }.bind(this));
    // \IS[n]
    text = text.replace(/\x1bIS\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataSkills);
    }.bind(this));
    // \IT[n]
    text = text.replace(/\x1bIT\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataStates);
    }.bind(this));
    // Finish
    return text;
};

Window_Base.prototype.actorClassName = function(n) {
    var actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.currentClass().name : '';
};

Window_Base.prototype.actorNickname = function(n) {
    var actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.nickname() : '';
};

Window_Base.prototype.partyClassName = function(n) {
    var actor = n >= 1 ? $gameParty.members()[n - 1] : null;
    return actor ? actor.currentClass().name : '';
};

Window_Base.prototype.partyNickname = function(n) {
    var actor = n >= 1 ? $gameParty.members()[n - 1] : null;
    return actor ? actor.nickname() : '';
};

Window_Base.prototype.escapeIconItem = function(n, database) {
    return '\x1bI[' + database[n].iconIndex + ']' + database[n].name;
};

Window_Base.prototype.obtainEscapeString = function(textState) {
    var arr = /^\<(.*?)\>/.exec(textState.text.slice(textState.index));
    if (arr) {
        textState.index += arr[0].length;
        return String(arr[0].slice(1, arr[0].length - 1));
    } else {
        return '';
    }
};

Yanfly.Message.Window_Base_processEscapeCharacter =
    Window_Base.prototype.processEscapeCharacter;
Window_Base.prototype.processEscapeCharacter = function(code, textState) {
  switch (code) {
  case 'MSGCORE':
    var id = this.obtainEscapeParam(textState);
    if (id === 0) {
      $gameSystem.initMessageFontSettings();
      this.resetFontSettings();
    }
    if (id === 1) this.contents.fontBold = !this.contents.fontBold;
    if (id === 2) this.contents.fontItalic = !this.contents.fontItalic;
    break;
  case 'FS':
    var size = this.obtainEscapeParam(textState);
    this.contents.fontSize = size;
    if (Yanfly.Param.MSGFontMaintain) $gameSystem.setMessageFontSize(size);
    break;
  case 'FN':
    var name = this.obtainEscapeString(textState);
    this.contents.fontFace = name;
    if (Yanfly.Param.MSGFontMaintain) $gameSystem.setMessageFontName(name);
    break;
  case 'OC':
    var id = this.obtainEscapeParam(textState);
    this.contents.outlineColor = this.textColor(id);
    break;
  case 'OW':
    this.contents.outlineWidth = this.obtainEscapeParam(textState);
    break;
  case 'PX':
    textState.x = this.obtainEscapeParam(textState);
    break;
  case 'PY':
    textState.y = this.obtainEscapeParam(textState);
    break;
  default:
    Yanfly.Message.Window_Base_processEscapeCharacter.call(this,
     code, textState);
    break;
  }
};

Window_Base.prototype.makeFontBigger = function() {
    var size = this.contents.fontSize + eval(Yanfly.Param.MSGFontSizeChange);
    this.contents.fontSize = Math.min(size, Yanfly.Param.MSGFontChangeMax);
};

Window_Base.prototype.makeFontSmaller = function() {
  var size = this.contents.fontSize - eval(Yanfly.Param.MSGFontSizeChange);
  this.contents.fontSize = Math.max(size, Yanfly.Param.MSGFontChangeMin);
};

Yanfly.Message.Window_Base_processNormalCharacter =
    Window_Base.prototype.processNormalCharacter;
Window_Base.prototype.processNormalCharacter = function(textState) {
    if (this.checkWordWrap(textState)) return this.processNewLine(textState);
    Yanfly.Message.Window_Base_processNormalCharacter.call(this, textState);
};

Window_Base.prototype.checkWordWrap = function(textState) {
    if (!textState) return false;
    if (!this._wordWrap) return false;
	//==========改进=============
	var c = textState.text[textState.index];
	var w = this.textWidth(c);
	if (escape(c).indexOf('%u') != 1) {
		
        var size = this.textWidthExCheck2(textState);
		
		return (this.width - 2 * this.standardPadding() - textState.x - 30 < w);
		
	}else{
		if (textState.text[textState.index] === ' ') {
		  var nextSpace = textState.text.indexOf(' ', textState.index + 1);
		  var nextBreak = textState.text.indexOf('\n', textState.index + 1);
		  if (nextSpace < 0) nextSpace = textState.text.length + 1;
		  if (nextBreak > 0) nextSpace = Math.min(nextSpace, nextBreak);
		  var word = textState.text.substring(textState.index, nextSpace);
		  var size = this.textWidthExCheck(word);
		}
		return (size + textState.x > this.wordwrapWidth());
	}
};

Window_Base.prototype.wordwrapWidth = function(){
  return this.contents.width;
};

Window_Base.prototype.saveCurrentWindowSettings = function(){
    this._saveFontFace = this.contents.fontFace;
    this._saveFontSize = this.contents.fontSize;
    this._savetextColor = this.contents.textColor;
    this._saveFontBold = this.contents.fontBold;
    this._saveFontItalic = this.contents.fontItalic;
    this._saveOutlineColor = this.contents.outlineColor;
    this._saveOutlineWidth = this.contents.outlineWidth;
};

Window_Base.prototype.restoreCurrentWindowSettings = function(){
    this.contents.fontFace = this._saveFontFace;
    this.contents.fontSize = this._saveFontSize;
    this.contents.textColor = this._savetextColor;
    this.contents.fontBold = this._saveFontBold;
    this.contents.fontItalic = this._saveFontItalic;
    this.contents.outlineColor = this._saveOutlineColor;
    this.contents.outlineWidth = this._saveOutlineWidth;
};

Window_Base.prototype.clearCurrentWindowSettings = function(){
    this._saveFontFace = undefined;
    this._saveFontSize = undefined;
    this._savetextColor = undefined;
    this._saveFontBold = undefined;
    this._saveFontItalic = undefined;
    this._saveOutlineColor = undefined;
    this._saveOutlineWidth = undefined;
};

Window_Base.prototype.textWidthExCheck = function(text) {
    var setting = this._wordWrap;
    this._wordWrap = false;
    this.saveCurrentWindowSettings();
    this._checkWordWrapMode = true;
    var value = this.drawTextEx(text, 0, this.contents.height);
    this._checkWordWrapMode = false;
    this.restoreCurrentWindowSettings();
    this.clearCurrentWindowSettings();
    this._wordWrap = setting;
    return value;
};
//==========改进=============
Window_Base.prototype.textWidthExCheck2 = function(textState) {
	var c = textState.text[textState.index];
	var w = this.textWidth(c);
    var setting = this._wordWrap;
    this._wordWrap = false;
    this.saveCurrentWindowSettings();
    this._checkWordWrapMode = true;
 
	var value = this.contents.drawText(c, textState.x, textState.y, w * 2, textState.height);
 
    this._checkWordWrapMode = false;
    this.restoreCurrentWindowSettings();
    this.clearCurrentWindowSettings();
    this._wordWrap = setting;
    return value;
};

//=============================================================================
// Window_Help
//=============================================================================

Yanfly.Message.Window_Help_setItem = Window_Help.prototype.setItem;
Window_Help.prototype.setItem = function(item) {
    if (eval(Yanfly.Param.MSGDescWrap)) {
      this.setText(item ? '<WordWrap>' + item.description : '');
    } else {
      Yanfly.Message.Window_Help_setItem.call(this, item);
    }
};

//=============================================================================
// Window_ChoiceList
//=============================================================================

Window_ChoiceList.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_ChoiceList.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

Yanfly.Message.Window_ChoiceList_updatePlacement =
    Window_ChoiceList.prototype.updatePlacement;
Window_ChoiceList.prototype.updatePlacement = function() {
    Yanfly.Message.Window_ChoiceList_updatePlacement.call(this);
    var messagePosType = $gameMessage.positionType();
    if (messagePosType === 0) {
      this.y = this._messageWindow.height;
    } else if (messagePosType === 2) {
      this.y = Graphics.boxHeight - this._messageWindow.height - this.height;
    }
};

//=============================================================================
// Window_NumberInput
//=============================================================================

Yanfly.Message.Window_NumberInput_updatePlacement =
    Window_NumberInput.prototype.updatePlacement;
Window_NumberInput.prototype.updatePlacement = function() {
    Yanfly.Message.Window_NumberInput_updatePlacement.call(this);
    var messageY = this._messageWindow.y;
    var messagePosType = $gameMessage.positionType();
    if (messagePosType === 0) {
      this.y = this._messageWindow.height;
    } else if (messagePosType === 1) {
      if (messageY >= Graphics.boxHeight / 2) {
          this.y = messageY - this.height;
      } else {
          this.y = messageY + this._messageWindow.height;
      }
    } else if (messagePosType === 2) {
      this.y = Graphics.boxHeight - this._messageWindow.height - this.height;
    }
};

//=============================================================================
// Window_EventItem
//=============================================================================

Yanfly.Message.Window_EventItem_updatePlacement =
    Window_EventItem.prototype.updatePlacement;
Window_EventItem.prototype.updatePlacement = function() {
    Yanfly.Message.Window_EventItem_updatePlacement.call(this);
    var messagePosType = $gameMessage.positionType();
    if (messagePosType === 0) {
      this.y = Graphics.boxHeight - this.height;
    } else if (messagePosType === 2) {
      this.y = 0;
    }
};

//=============================================================================
// Window_ScrollText
//=============================================================================

Window_ScrollText.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_ScrollText.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

//=============================================================================
// Window_NameBox
//=============================================================================

Yanfly.DisableWebGLMask = false;

function Window_NameBox() {
    this.initialize.apply(this, arguments);
}

Window_NameBox.prototype = Object.create(Window_Base.prototype);
Window_NameBox.prototype.constructor = Window_NameBox;

Window_NameBox.prototype.initialize = function(parentWindow) {
    this._parentWindow = parentWindow;
    Window_Base.prototype.initialize.call(this, 0, 0, 240, this.windowHeight());
    this._text = '';
    this._lastNameText = '';
    this._openness = 0;
    this._closeCounter = 0;
    this.deactivate();
    if (eval(Yanfly.Param.MSGNameBoxClear)) {
      this.backOpacity = 0;
      this.opacity = 0;
    }
    this.hide();
};

Window_NameBox.prototype.windowWidth = function() {
    this.resetFontSettings();
    var dw = this.textWidthEx(this._text);
    dw += this.padding * 2;
    var width = dw + eval(Yanfly.Param.MSGNameBoxPadding)
    return Math.ceil(width);
};

Window_NameBox.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height);
};

Window_NameBox.prototype.calcNormalCharacter = function(textState) {
    return this.textWidth(textState.text[textState.index++]);
};

Window_NameBox.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

Window_NameBox.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_NameBox.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

Window_NameBox.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.active) return;
    if (this.isClosed()) return;
    if (this.isClosing()) return;
    if (this._closeCounter-- > 0) return;
    if (this._parentWindow.isClosing()) {
      this._openness = this._parentWindow.openness;
    }
    this.close();
};

Window_NameBox.prototype.refresh = function(text, position) {
    this.show();
    this._lastNameText = text;
    this._text = Yanfly.Param.MSGNameBoxText + text;
    this._position = position;
    this.width = this.windowWidth();
    this.createContents();
    this.contents.clear();
    this.resetFontSettings();
    this.changeTextColor(this.textColor(Yanfly.Param.MSGNameBoxColor));
    var padding = eval(Yanfly.Param.MSGNameBoxPadding) / 2;
    this.drawTextEx(this._text, padding, 0, this.contents.width);
    this._parentWindow.adjustWindowSettings();
    this._parentWindow.updatePlacement();
    this.adjustPositionX();
    this.adjustPositionY();
    this.open();
    this.activate();
    this._closeCounter = 4;
    return '';
};

Window_NameBox.prototype.adjustPositionX = function() {
    if (this._position === 1) {
      this.x = this._parentWindow.x;
      this.x += eval(Yanfly.Param.MSGNameBoxBufferX);
    } else if (this._position === 2) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width * 3 / 10;
      this.x -= this.width / 2;
    } else if (this._position === 3) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width / 2;
      this.x -= this.width / 2;
    } else if (this._position === 4) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width * 7 / 10;
      this.x -= this.width / 2;
    } else {
      this.x = this._parentWindow.x + this._parentWindow.width;
      this.x -= this.width;
      this.x -= eval(Yanfly.Param.MSGNameBoxBufferX);
    }
    this.x = this.x.clamp(0, Graphics.boxWidth - this.width);
};

Window_NameBox.prototype.adjustPositionY = function() {
    if ($gameMessage.positionType() === 0) {
      this.y = this._parentWindow.y + this._parentWindow.height;
      this.y -= eval(Yanfly.Param.MSGNameBoxBufferY);
    } else {
      this.y = this._parentWindow.y;
      this.y -= this.height;
      this.y += eval(Yanfly.Param.MSGNameBoxBufferY);
    }
    if (this.y < 0) {
      this.y = this._parentWindow.y + this._parentWindow.height;
      this.y -= eval(Yanfly.Param.MSGNameBoxBufferY);
    }
};

//=============================================================================
// Window_Message
//=============================================================================

Yanfly.Message.Window_Message_createSubWindows =
    Window_Message.prototype.createSubWindows;
Window_Message.prototype.createSubWindows = function() {
    Yanfly.Message.Window_Message_createSubWindows.call(this);
    this._nameWindow = new Window_NameBox(this);
    Yanfly.nameWindow = this._nameWindow;
    var scene = SceneManager._scene;
    scene.addChild(this._nameWindow);
};

Window_Message.prototype.numVisibleRows = function() {
    return $gameSystem.messageRows();
};

Window_Message.prototype.windowWidth = function() {
    return $gameSystem.messageWidth();
};

Window_Message.prototype.wordwrapWidth = function(){
  if (Yanfly.Param.MSGTightWrap && $gameMessage.faceName() !== '') {
    return this.contents.width - this.newLineX();
  }
  return Window_Base.prototype.wordwrapWidth.call(this);
};

Window_Message.prototype.adjustWindowSettings = function() {
    this.width = this.windowWidth();
    this.height = Math.min(this.windowHeight(), Graphics.boxHeight);
    if (Math.abs(Graphics.boxHeight - this.height) < this.lineHeight()) {
      this.height = Graphics.boxHeight;
    }
    this.createContents();
    this.x = (Graphics.boxWidth - this.width) / 2;
};

Yanfly.Message.Window_Message_startMessage =
    Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
    this._nameWindow.deactivate();
    Yanfly.Message.Window_Message_startMessage.call(this);
};

Yanfly.Message.Window_Message_terminateMessage =
    Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
    this._nameWindow.deactivate();
    Yanfly.Message.Window_Message_terminateMessage.call(this);
};

Yanfly.Message.Window_Message_newPage =
    Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function(textState) {
    this.adjustWindowSettings();
    Yanfly.Message.Window_Message_newPage.call(this, textState);
};

Window_Message.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_Message.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

Window_Message.prototype.newLineX = function() {
    if ($gameMessage.faceName() === '') {
      return 0;
    } else {
      return eval(Yanfly.Param.MSGFaceIndent);
    }
};

Window_Message.prototype.isFastForward = function() {
    if (!$gameSystem.isFastFowardEnabled()) return false;
    return Input.isPressed(Yanfly.Param.MSGFastForwardKey);
};

Yanfly.Message.Window_Message_updateInput =
    Window_Message.prototype.updateInput;
Window_Message.prototype.updateInput = function() {
    if (this.pause && this.isFastForward()) {
      if (!this._textState) {
        this.pause = false;
        this.terminateMessage();
      }
    }
    return Yanfly.Message.Window_Message_updateInput.call(this);
};

Yanfly.Message.Window_Message_updateShowFast =
    Window_Message.prototype.updateShowFast;
Window_Message.prototype.updateShowFast = function() {
    if (this.isFastForward()) this._showFast = true;
    Yanfly.Message.Window_Message_updateShowFast.call(this);
};

Yanfly.Message.Window_Message_updateWait =
    Window_Message.prototype.updateWait;
Window_Message.prototype.updateWait = function() {
    if (this.isFastForward()) return false;
    return Yanfly.Message.Window_Message_updateWait.call(this);
};

Yanfly.Message.Window_Message_startWait =
    Window_Message.prototype.startWait;
Window_Message.prototype.startWait = function(count) {
    if (this._checkWordWrapMode) return;
    Yanfly.Message.Window_Message_startWait.call(this, count);
    if (this.isFastForward()) this._waitCount = 0;
};

Yanfly.Message.Window_Message_startPause =
    Window_Message.prototype.startPause;
Window_Message.prototype.startPause = function() {
    if (this._checkWordWrapMode) return;
    Yanfly.Message.Window_Message_startPause.call(this);
};

Window_Message.prototype.convertEscapeCharacters = function(text) {
    text = Window_Base.prototype.convertEscapeCharacters.call(this, text);
    text = this.convertNameBox(text);
    text = this.convertMessageCharacters(text);
    return text;
};

Window_Message.prototype.convertNameBox = function(text) {
    text = text.replace(/\x1bN\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 1);
    }, this);
    text = text.replace(/\x1bN1\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 1);
    }, this);
    text = text.replace(/\x1bN2\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 2);
    }, this);
    text = text.replace(/\x1bN3\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 3);
    }, this);
    text = text.replace(/\x1bNC\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 3);
    }, this);
    text = text.replace(/\x1bN4\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 4);
    }, this);
    text = text.replace(/\x1bN5\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 5);
    }, this);
    text = text.replace(/\x1bNR\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 5);
    }, this);
    return text;
};

Window_Message.prototype.convertMessageCharacters = function(text) {
    text = text.replace(/\x1bAF\[(\d+)\]/gi, function() {
        var i = parseInt(arguments[1]);
        return this.convertActorFace($gameActors.actor(i));
    }.bind(this));
    text = text.replace(/\x1bPF\[(\d+)\]/gi, function() {
        var i = parseInt(arguments[1]);
        return this.convertActorFace($gameParty.members()[i - 1]);
    }.bind(this));
    return text;
};

Window_Message.prototype.convertActorFace = function(actor) {
    $gameMessage.setFaceImage(actor.faceName(), actor.faceIndex());
    return '';
};

Yanfly.Message.Window_Message_processEscapeCharacter =
    Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
    case '!':
      if (!this.isFastForward()) this.startPause();
      break;
    case 'W':
      this.startWait(this.obtainEscapeParam(textState));
    default:
      Yanfly.Message.Window_Message_processEscapeCharacter.call(this,
        code, textState);
      break;
    }
};

if (Yanfly.Param.MSGNameBoxClose) {

Yanfly.Message.Window_Message_doesContinue =
  Window_Message.prototype.doesContinue;
Window_Message.prototype.doesContinue = function() {
  var value = Yanfly.Message.Window_Message_doesContinue.call(this);
  if (!value) return false;
  if (this.hasDifferentNameBoxText()) {
    return false;
  }
  return true;
};

Window_Message.prototype.hasDifferentNameBoxText = function() {
  var texts = $gameMessage._texts;
  var length = texts.length;
  var open = this._nameWindow.isOpen();
  for (var i = 0; i < length; ++i) {
    var text = texts[i];
    if (text.length <= 0) continue;
    if (Yanfly.MsgMacro) {
      text = this.convertMacroText(text);
      text = text.replace(/\x1b/gi, '\\');
    }
    if (text.match(/\\(?:N|N1|N2|N3|N4|N5|NC|NR)<(.*)>/i)) {
      var name = String(RegExp.$1);
    } else if (text.match(/\\(?:ND|ND1|ND2|ND3|ND4|ND5|NDC|NDR)<(.*)>/i)) {
      var name = String(RegExp.$1);
    } else if (text.match(/\\(?:NT|NT1|NT2|NT3|NT4|NT5|NTC|NTR)<(.*)>/i)) {
      var name = String(RegExp.$1);
    }
    if (name) {
      name = name.replace(/\\V\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\V\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\N\[(\d+)\]/gi, function() {
        return this.actorName(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\P\[(\d+)\]/gi, function() {
        return this.partyMemberName(parseInt(arguments[1]));
      }.bind(this));
      name = name.replace(/\\/gi, '\x1b');
    }
    if (name && !open) return true;
    if (name && name !== this._nameWindow._lastNameText) {
      return true;
    }
  }
  if (open && !name) return true;
  return false;
};

} // Yanfly.Param.MSGNameBoxClose

//=============================================================================
// End of File
//=============================================================================
