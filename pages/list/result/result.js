// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    SUM:0,
    Kind:'unknow'
  },

  whichKind: function(){
    this.data.SUM=this.data.A*3+this.data.B*2+this.data.C*1;
    if(this.data.SUM<3){
     return "Shame:(20)羞愧：羞愧的能量级几近死亡，它犹如是意识的自杀行为，巧妙的夺去人的生命。在羞愧的状况下，我们恨不得找个地缝钻进去，或者是希望自己能够隐身。这是一种严重摧残身心健康的状况，最终还会让我们的身体致病。"
    } else if (this.data.SUM<5){
      return "Guilt:(30)内疚：内疚感以多种方式呈现，比如懊悔，自责，受虐狂，以及所有的受害者情节都是。无意识的内疚感会导致身心的疾病，以及带来意外事故和自杀行为。它也经常表现为频繁的愤怒和疲乏。"
    } else if (this.data.SUM<7) {
      return "Apathy:(50)冷淡：这个能量级表现为贫穷、失望和无助感。世界与未来都看起来没有希望。冷漠意味着无助，让人成为生活中各方面的受害者。缺乏的不止是资源，他们还缺乏运气。除非有外在的帮护者提携，否则很可能会潦倒致死。"
    } else if (this.data.SUM<10) {
      return "Grief:(75)悲伤：这是悲伤、失落和依赖性的能量级。在这个能量级的人，过的是八辈子都懊丧和消沉的生活。这种生活充满了对过去的懊悔、自责和悲恸。在悲伤中的人，看这个世界都是灰黑色的。"
    } else if (this.data.SUM < 12) {
      return "Fear: (100)恐惧：从这个能量级来看世界，到处充满了危险、陷害和威胁。一旦人们开始关注恐惧，就真的会有数不尽的让人不安的事来临。之后会形成强迫性的恐惧，这会妨害个性的成长，最后导致压抑。因为它是让能量流向恐惧，这种压抑性的行为不能提升到更高的层次。"
    } else if (this.data.SUM < 14) {
      return "Desire:(125)欲望：欲望让我们耗费大量的努力去达成我们的目标，去取得我们的回报。这也是一个易上瘾的能级，不知道什么时候，一个欲望会强大到比生命本身还重要。欲望意味着累积和贪婪。愿望可以帮助我们走上有成就的道路。但是欲望却能成为到达比知晓更高层次的跳板。"
    } else if (this.data.SUM < 16) {
      return "Anger:(150)愤怒:如果有人能跳出冷漠和内疚的怪圈，并摆脱恐惧的控制，他就开始有欲望了，而欲望则带来挫折感，接着引发愤怒。愤怒常常表现为怨恨和复仇心里，它是易变且危险的。愤怒来自未能满足的欲望，来自比之更低的能量级。挫败感来自于放大了欲望的重要性。愤怒很容易就导致憎恨，这会逐渐侵蚀一个人的心灵。"
    }
    else if (this.data.SUM < 18) {
      return "Pride:(175)骄傲:比起其他的较低能量级，人们会觉得这个能量级是积极的。而事实上骄傲让人感觉好一些，只是相比其他更低的能量级而言。骄傲是具有防御性和易受攻击性的，因为它是建立在外界条件下的感受。一旦条件不具备，就很容易跌入更低的能量级。自我的膨胀是骄傲自大的助推剂，而自我常常是易受攻击的。因此骄傲的演化趋势是傲慢和否认。而这些都是抵制成长的"  
  }
    else if (this.data.SUM < 20) {
      return "Courage:(200)勇气:到来200这个能量级，动力才显端倪。勇气是拓展自我、获得成就，坚忍不拔，和果断决策的根基。在比之更低的能量级，世界看起来是无助的，失望的，挫折的，恐怖的，但是到来勇气的能级，生活看起来就是激动人心的，充满挑战的，新鲜有趣的。在这个能动性的能级，人们有能力去把握生活中的机会。因此个人成长和接受教育是可行的途径。对于那些能够打击能量级低于200的人的障碍，对进化到200能级的人来说则是小菜一碟。到来这个能级的人们，总是能尽数回馈足够多的能量给这个世界。而低于这个能级的人们则是不断地从社会中汲取能量，丝毫没有回馈。人类集体意识能级停留在190达几百年之久，奇怪的是，在最近的10年里突然跃迁到了207。到2006年的测量结果又变成了204。2007年的测量结果为205。"
    }
    else if (this.data.SUM < 22) {
      return "Neutrality:(250)淡定:到达这个能级的能量都变得很活跃了。低于250的能级，意识是趋向于分裂和刚硬性的。淡定的能级则是灵活和无分别性的看待现实中的问题。到来这个能级，意味着对结果的超然，一个人不会再经验挫败和恐惧。这是一个有安全感的能级。到来这个能级的人们，都是很容易与之相处的，而且让人感到温馨可靠。因为他们无意于争端、竞争和犯罪。这样的人总是镇定从容。他们不会去强迫别人做什么。"
    }
    else if (this.data.SUM < 24) {
      return "Willingness:(310)主动:这个意识层次可以看做是进入更高层次的一道门。在淡定的层次的人，会如实的完成工作任务。但是在主动层次的人，通常会出色的完成任务，并极力获得成功。这个能级的人的成长是迅速的，他们是为人类进步而预备的人选。低于200能级的人，他们的思想是封闭的，但是能级为310的人们则是全然敞开的。这个能级的人，通常是真诚而友善的，也易于取得社交和经济上的成功。他们总能有助于人，并且对社会的进步做出贡献来。他们也乐意面对内在的状况，也不存在较大的学习障碍。鉴于他们具有从逆境中崛起并学到经验的能力，他们都能够自我调整。由于已经释放了骄傲，他们能够看到自己的不足，并学习别人的优点。"
    }
    else if (this.data.SUM < 26) {
      return "Acceptance:(350)宽容:在这个能级，一个巨大的转变会发生，那就是了解到自己才是自己命运的主宰，自己才是自己生活的创造者。低于200能级的人则是没有力量的，通常视自己为受害者，完全受生活所左右。这个看法的根源是，认为一个人的幸福和苦难来自某个“外在”的东西。在宽容的能级，没有什么“外在”能让一个人快乐，爱也不是谁能给或夺走的，这些都来自内在。宽容意味着让生活如它本来的样子，并不刻意去塑造成一个特定的模式。在这个能级的人不会对判断对错感兴趣，相反的，对如果解决困难他们则乐于参与。他们更在意长期目标，良好的自律和自控是他们显著的特点。"
    }
    else if (this.data.SUM < 27) {
      return "Reason:(400)明智:超越了感情化的较低能量级，就进入有理智和智能的阶段。这是科学、医学以及概念化和理解能力形成的能级。知识和教育在这里成为资历。这是诺贝尔奖金获得者、大政治家和高级法庭审判长的能级。爱因斯坦，弗洛伊德，以及很多其他历史上的思想家都是这个能级。这个能级的人的缺点是，过于关注对符号和符号所代表的意义的区分。明智并不能让人走向真理。它只是能制造出大量的信息和文档，但是缺乏解决数据和结果差异性的能力。明智本身是通往更高能级的一个最大障碍。在我们的社会中能超越这个能级的人凤毛麟角。"
    }
    else if (this.data.SUM < 28) {
      return "Love:(500)爱:这里的爱并非通常意义上各种媒体所描述的爱。通常意义上的爱，很容易就带上愤怒和依赖的面具。这种爱一旦受到挫折，立马就能转变成愤恨。引发愤恨的爱是来源于骄傲而不是真的爱。这个500能级的爱是无条件的爱，是不变更的爱，是永久性的爱。这种爱不会动摇，它不是来自外界因素。爱是存在的基本状态。爱是宽容，滋养和维持这个世界的。它不是知性的爱，不是来自头脑的爱，它是发自心灵的爱。爱是总是聚焦在生活美好的那一面上，并且增大积极的经验。这是一个真正幸福的能级。世界上只有0.4 % 的人曾经达到这个意识进化的层次。"
    }
    else if (this.data.SUM < 29) {
      return "Joy:(540)喜悦:当爱变得越来越无限的时候，它开始发展成为内在的喜悦。这是在每一个当下，从内在而非外在升起的喜悦。540能级也是拥有治疗和精神独立的能级。由此往上，就是很多圣人和高级修行者以及治疗师的能级。这个能级的人的特点是，他们具有巨大的耐性，以及对一再显现的困境具有持久的乐观态度，以及慈悲。到达这个能级的人对其他人有显著的影响。他们持久性的关注，会带来爱和平静。在能级超过500的人看来，这个世界充满了闪亮的美丽和完美的创造。一切都毫不费力的同时发生着。在他们开来是稀松平常的作为，却会被平常人当成是奇迹来看待。濒死体验在他们的转变中特征性的出现，这也让他们体验到能量浮动在540 - 600之间的经验。"
    }
    else if (this.data.SUM < 30) {
      return "Peace:(600)平和:这个能量层级和所谓的卓越、自我实现以及基督意识有关。它非常稀有，一千万人当中才有一个人能够达到。而一旦达到这个能级，内与外的区分就消失了，感官被关闭了（《心经》：‘无眼耳鼻舌身意，无色声香味触法......’）。在能级600及其以上的人的感知如同慢镜头一样，时空悬停了——没有什么是固定的了，所有的一切都生机勃勃并光芒四射。虽然在其他人眼里这个世界还是老样子，但是在这人眼里世界却是一个，和宇宙源头进化一起协同舞蹈的，不断浮动进化的流转。这是一种非同寻常、无法言语的现象，所以头脑保持长久的沉默，不再分析判断。观察者和被观察者成为同一个人，观照者消融在观照中，成为观照本身。能级为600到700之间的艺术作品、音乐和建筑能临时性的，把我们带到通常认为的通灵的和永恒的状态中。"
    }
    else {
      return "Enlightenment:(700 – 1000)开悟:这是历史上所有创立了精神模范，让无数人历代跟随的伟人的能级。这是强大灵感的能级，这些人的诞生，形成了影响全人类的引力场。在这个能级不再有个体与个体之间的分离感，取而代之的是意识与神性的合一。这是人类意识进化的顶峰。到来这个能级，不再对身体有“我”的执着，不再对其有关注。身体成了意识降临头脑的一个工具，它的首要价值就是连接这两者。这是非二元性的，是完全合一的能级。在历史上达到这么高智慧能级的人，这些伟大的“阿凡达”（Avatar, 道成肉身的神），用“主”来称呼最为合适，他们是：主克里希纳，主佛陀，和主耶稣基督。"
    }


},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.setData({
      A: options.A - 0,
      B: options.B - 0,
      C: options.C - 0,
      D: options.D - 0
    })
   
    this.setData({
      Kind: this.whichKind()
    }) 
     /**
     霍金斯能量等级
   */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})