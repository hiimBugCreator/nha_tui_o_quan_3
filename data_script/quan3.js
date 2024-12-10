const point_template_area = {
    title: "{Name}",
    content: `
                <div style="font-family: 'Arial', sans-serif; 
                    color: #333; padding: 15px; 
                    background-color: #f9f9f9; 
                    border-radius: 8px; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); 
                    min-width: 300px;">

                    <div>
                        <div id="basicInfo" style="display: block;">
                            <p style="font-size: 14px; margin-bottom: 5px;"><b>Khu vực:</b> <i>{Location}</i></p>
                            <p style="font-size: 14px; margin-bottom: 5px;"><b>Diện tích:</b> <i>{Area}</i></p>
                            <p style="font-size: 14px; margin-bottom: 5px;"><b>Dân số:</b> <i>{Population}</i></p>
                            <b>Thông tin chi tiết:</b>
                            <p>{Info}</p>
                        </div>
                    </div>

                    <div style="margin-top: 15px; text-align: center; font-size: 12px; color: #888;">
                        <span>Thông tin này được tìm bởi <b>Lộc</b> và độ chính xác đến ít nhất năm 2022.</span>
                    </div>
                </div>
            `
};

const district3Location = [
    [
        106.66462313459891,
        10.786926276778152
    ],
    [
        106.66503895106824,
        10.78839977379577
    ],
    [
        106.66504220758308,
        10.78885607467587
    ],
    [
        106.66488273699463,
        10.789900024487093
    ],
    [
        106.66510036609945,
        10.790077893313999
    ],
    [
        106.66589479283728,
        10.789558080824115
    ],
    [
        106.66626353461875,
        10.789261847613517
    ],
    [
        106.66654839086372,
        10.789476082560348
    ],
    [
        106.6666375743164,
        10.789683572357566
    ],
    [
        106.6667448626678,
        10.7895347066789
    ],
    [
        106.66690930431034,
        10.789396902128223
    ],
    [
        106.66779668645727,
        10.788950000943416
    ],
    [
        106.6677978887895,
        10.788950978657857
    ],
    [
        106.66936154222414,
        10.78836736752945
    ],
    [
        106.66969339509036,
        10.788275136561886
    ],
    [
        106.67002513424285,
        10.788183380521964
    ],
    [
        106.67036990227888,
        10.788083317559728
    ],
    [
        106.67042336764803,
        10.788069511521982
    ],
    [
        106.67044356856533,
        10.78806324502953
    ],
    [
        106.6705035034674,
        10.788047792318181
    ],
    [
        106.67078950304766,
        10.78796718810222
    ],
    [
        106.6708085761334,
        10.78809882314745
    ],
    [
        106.67081125834218,
        10.788117925475905
    ],
    [
        106.67081662275976,
        10.78815283662477
    ],
    [
        106.6708300338037,
        10.788247030836347
    ],
    [
        106.67085015036957,
        10.788384040546005
    ],
    [
        106.67085853870792,
        10.788436100435698
    ],
    [
        106.67086926754307,
        10.788489455152254
    ],
    [
        106.67088334913919,
        10.788563229559584
    ],
    [
        106.67090480681365,
        10.788669280242013
    ],
    [
        106.67094503994981,
        10.788880064094336
    ],
    [
        106.67096247430692,
        10.788966353689002
    ],
    [
        106.67097186203767,
        10.789019049612484
    ],
    [
        106.67097856755963,
        10.789048691065403
    ],
    [
        106.67098460253234,
        10.78908030861504
    ],
    [
        106.67099264915868,
        10.789126417531115
    ],
    [
        106.6710094129636,
        10.789177137330658
    ],
    [
        106.67102483566855,
        10.789225222331005
    ],
    [
        106.67103690561102,
        10.78926935513183
    ],
    [
        106.671077809295,
        10.789401753488633
    ],
    [
        106.67131824161581,
        10.789489727758891
    ],
    [
        106.6713738974481,
        10.789511464790618
    ],
    [
        106.67141080743974,
        10.789515278535326
    ],
    [
        106.67179875465305,
        10.789558911079022
    ],
    [
        106.6718487203884,
        10.789572724537775
    ],
    [
        106.6719124228739,
        10.789588533284611
    ],
    [
        106.67196338484084,
        10.789601707239095
    ],
    [
        106.67207974085348,
        10.78963081498153
    ],
    [
        106.67223195620207,
        10.789611712749204
    ],
    [
        106.67219985888383,
        10.789725662224521
    ],
    [
        106.67220991716731,
        10.789822490734345
    ],
    [
        106.67244058712286,
        10.789844227742012
    ],
    [
        106.6725988374549,
        10.789807340697852
    ],
    [
        106.67272288961124,
        10.78980075372519
    ],
    [
        106.67274770006298,
        10.78985476689781
    ],
    [
        106.67286437614516,
        10.78985081471484
    ],
    [
        106.67306084795814,
        10.789885725663149
    ],
    [
        106.6731084571641,
        10.789892312633954
    ],
    [
        106.67317551239196,
        10.789948301881815
    ],
    [
        106.6732217804935,
        10.7899865063025
    ],
    [
        106.67336125536872,
        10.789962134517303
    ],
    [
        106.67342965169274,
        10.790000997633078
    ],
    [
        106.67347927255528,
        10.78997860193985
    ],
    [
        106.67353224620197,
        10.789994410665706
    ],
    [
        106.6735818670645,
        10.790008243299225
    ],
    [
        106.67363417013583,
        10.7900003389373
    ],
    [
        106.67372268302574,
        10.789958182336827
    ],
    [
        106.6737495051136,
        10.789896923516238
    ],
    [
        106.6738098548376,
        10.789939080125631
    ],
    [
        106.67389568551874,
        10.790079382547573
    ],
    [
        106.67408813400878,
        10.790275674093524
    ],
    [
        106.67409752173954,
        10.790315854561038
    ],
    [
        106.67405661806053,
        10.790564841608656
    ],
    [
        106.67403180762868,
        10.79081514583522
    ],
    [
        106.67403448984265,
        10.791038443379424
    ],
    [
        106.67416591809467,
        10.791023293404034
    ],
    [
        106.67423364386651,
        10.791015389068802
    ],
    [
        106.67427790031148,
        10.791009460817232
    ],
    [
        106.67438309345401,
        10.790996239307045
    ],
    [
        106.67449775790293,
        10.790983065413613
    ],
    [
        106.6745011106639,
        10.790981089329556
    ],
    [
        106.67466941926521,
        10.790960011098834
    ],
    [
        106.674672101474,
        10.790961328488283
    ],
    [
        106.67470697020462,
        10.790956058930224
    ],
    [
        106.67523536534785,
        10.79089084814363
    ],
    [
        106.67530785506271,
        10.790585317336385
    ],
    [
        106.67552947648406,
        10.790625472792298
    ],
    [
        106.67572527772543,
        10.790663018431534
    ],
    [
        106.67621276920224,
        10.790752600990984
    ],
    [
        106.67656011526762,
        10.790802003125831
    ],
    [
        106.6766633803491,
        10.79081781180815
    ],
    [
        106.67707442886113,
        10.790875118272046
    ],
    [
        106.67719781046524,
        10.790892903034338
    ],
    [
        106.67733862642652,
        10.790913981269782
    ],
    [
        106.67741775160414,
        10.790915298659627
    ],
    [
        106.67758874246037,
        10.790920568219224
    ],
    [
        106.67807086948959,
        10.79093044864135
    ],
    [
        106.67808885976984,
        10.790643271624866
    ],
    [
        106.67815926776235,
        10.790642612928863
    ],
    [
        106.67821492359464,
        10.790643271624283
    ],
    [
        106.67829404875381,
        10.790641295537998
    ],
    [
        106.67841743035795,
        10.790639319451692
    ],
    [
        106.67850460214349,
        10.79066369118185
    ],
    [
        106.67850527269569,
        10.790692673777283
    ],
    [
        106.67950779321315,
        10.791151111421751
    ],
    [
        106.67950913431756,
        10.791153746198987
    ],
    [
        106.67953708027656,
        10.791165834581433
    ],
    [
        106.67953640972438,
        10.791165175887146
    ],
    [
        106.67954915021612,
        10.791167151969992
    ],
    [
        106.6798193827979,
        10.791230985743377
    ],
    [
        106.67982273555889,
        10.791232303131657
    ],
    [
        106.67999037360798,
        10.791269190001053
    ],
    [
        106.67999372636896,
        10.791272483471301
    ],
    [
        106.68009766196069,
        10.791294879068259
    ],
    [
        106.68027871108092,
        10.791306735560802
    ],
    [
        106.68035113071814,
        10.791283022576811
    ],
    [
        106.6803585067923,
        10.791283022576811
    ],
    [
        106.68040477489384,
        10.791284339964863
    ],
    [
        106.68062337493971,
        10.791288950823178
    ],
    [
        106.68068429601894,
        10.791202046362601
    ],
    [
        106.68096856060647,
        10.79122749715737
    ],
    [
        106.68120526554603,
        10.791294025259615
    ],
    [
        106.68150701406202,
        10.791299953505662
    ],
    [
        106.68167062881624,
        10.791192586365746
    ],
    [
        106.68178529325276,
        10.79140139236494
    ],
    [
        106.68228544830743,
        10.79181780833338
    ],
    [
        106.68333222235778,
        10.792359960639729
    ],
    [
        106.68377327733863,
        10.79238758410509
    ],
    [
        106.68422952281972,
        10.792419035015987
    ],
    [
        106.68479833605454,
        10.792317792890252
    ],
    [
        106.68480168881554,
        10.79231515812322
    ],
    [
        106.68497066798346,
        10.7922855169924
    ],
    [
        106.68497482835004,
        10.792286626829858
    ],
    [
        106.68522896763247,
        10.792239859706552
    ],
    [
        106.68531211614732,
        10.792239201014173
    ],
    [
        106.68531613946048,
        10.792236566246443
    ],
    [
        106.68548511861398,
        10.792234590170617
    ],
    [
        106.68548847137497,
        10.792231955402846
    ],
    [
        106.68566080328944,
        10.79222997932701
    ],
    [
        106.68570640083878,
        10.792228661943106
    ],
    [
        106.68600906701859,
        10.792310979808814
    ],
    [
        106.68615524740845,
        10.792463137571913
    ],
    [
        106.68633128888115,
        10.792320063595346
    ],
    [
        106.68661746658609,
        10.792101072664762
    ],
    [
        106.68706807792277,
        10.791745406196112
    ],
    [
        106.68722714320955,
        10.791622495969138
    ],
    [
        106.68772115919512,
        10.791237044143907
    ],
    [
        106.68782040092017,
        10.791160635615542
    ],
    [
        106.68795681157972,
        10.791053110566011
    ],
    [
        106.68820085570287,
        10.790861184547841
    ],
    [
        106.68834524348824,
        10.790747719449897
    ],
    [
        106.68962130304571,
        10.789745188630441
    ],
    [
        106.69079795096954,
        10.788787553986625
    ],
    [
        106.69125494138093,
        10.788428412569207
    ],
    [
        106.69143589532747,
        10.788283245452027
    ],
    [
        106.69159573798025,
        10.788155853842472
    ],
    [
        106.69258487385504,
        10.787362747001692
    ],
    [
        106.69273373646375,
        10.787244839207146
    ],
    [
        106.69286047084972,
        10.787142740240846
    ],
    [
        106.69298921687144,
        10.787041299946923
    ],
    [
        106.69322726292059,
        10.786850275920894
    ],
    [
        106.69325408500846,
        10.786829856104365
    ],
    [
        106.69329901200561,
        10.78679230998648
    ],
    [
        106.69348424871578,
        10.78664254620286
    ],
    [
        106.69373646572932,
        10.78644450576168
    ],
    [
        106.69396579459506,
        10.786262044523127
    ],
    [
        106.69396713569945,
        10.786260068408042
    ],
    [
        106.69424005046857,
        10.786047306604347
    ],
    [
        106.69431448177363,
        10.785988681807178
    ],
    [
        106.69460981459751,
        10.785755170679352
    ],
    [
        106.69475328383935,
        10.785642477119344
    ],
    [
        106.69475933717996,
        10.78563870805546
    ],
    [
        106.69483902633854,
        10.78557484691474
    ],
    [
        106.69518845087708,
        10.78529210563963
    ],
    [
        106.69536670758599,
        10.785148929176941
    ],
    [
        106.69576438278212,
        10.784828140763052
    ],
    [
        106.69595664466091,
        10.784674206738828
    ],
    [
        106.69599486616377,
        10.784644564850796
    ],
    [
        106.69603778150436,
        10.784608994586032
    ],
    [
        106.69608136739713,
        10.78457210689963
    ],
    [
        106.6962020668017,
        10.784474617990819
    ],
    [
        106.69628800064254,
        10.784405321849926
    ],
    [
        106.6963400132461,
        10.784365232731135
    ],
    [
        106.69645444098445,
        10.78427326355415
    ],
    [
        106.69654006173185,
        10.784203304077344
    ],
    [
        106.69683964261259,
        10.783961696571504
    ],
    [
        106.69705467006644,
        10.783789070227067
    ],
    [
        106.6975056709043,
        10.783393506222042
    ],
    [
        106.69784480253172,
        10.783093412904043
    ],
    [
        106.69809107668574,
        10.782879249207578
    ],
    [
        106.69779450024139,
        10.782565034425135
    ],
    [
        106.69748314318421,
        10.782229211072881
    ],
    [
        106.69730947015083,
        10.782044771133682
    ],
    [
        106.69716319946738,
        10.781888247602875
    ],
    [
        106.6970563661845,
        10.781772368268502
    ],
    [
        106.69630061454625,
        10.78096785935679
    ],
    [
        106.696272451354,
        10.780938217107524
    ],
    [
        106.69352166850827,
        10.777997435242176
    ],
    [
        106.69303606558053,
        10.777478854598906
    ],
    [
        106.69207075402637,
        10.776449327159852
    ],
    [
        106.69165943497217,
        10.7760104618548
    ],
    [
        106.69132284622326,
        10.775652246245844
    ],
    [
        106.69115051429698,
        10.775470437190732
    ],
    [
        106.69063511953765,
        10.774917609854484
    ],
    [
        106.69054372281603,
        10.77482002295912
    ],
    [
        106.68994947015707,
        10.774187384321493
    ],
    [
        106.68981159655536,
        10.774037368187512
    ],
    [
        106.68909072902733,
        10.773275786327646
    ],
    [
        106.68857626394174,
        10.772734017220467
    ],
    [
        106.68829530253137,
        10.772440221418444
    ],
    [
        106.6878178693366,
        10.771928383664658
    ],
    [
        106.68765827790027,
        10.771759088359563
    ],
    [
        106.68737398918448,
        10.771455397864257
    ],
    [
        106.68677920933001,
        10.77082169177509
    ],
    [
        106.68651589229239,
        10.770540044678196
    ],
    [
        106.68634356036317,
        10.770354938836759
    ],
    [
        106.68582790568563,
        10.769805549299473
    ],
    [
        106.68573134615264,
        10.769700809451242
    ],
    [
        106.6852847583521,
        10.769229809066736
    ],
    [
        106.68496959878809,
        10.768895826527945
    ],
    [
        106.68451697601989,
        10.768413626235022
    ],
    [
        106.68449082448423,
        10.768385958982165
    ],
    [
        106.68427691832584,
        10.768160009653093
    ],
    [
        106.68385044709447,
        10.767710745463885
    ],
    [
        106.68362916485172,
        10.767478866911901
    ],
    [
        106.68320865012281,
        10.767037208644037
    ],
    [
        106.68304838814788,
        10.766869228087987
    ],
    [
        106.6823912469305,
        10.766181494937443
    ],
    [
        106.68195807018039,
        10.765730910301432
    ],
    [
        106.68191448428762,
        10.765688091551583
    ],
    [
        106.68183066525127,
        10.765605089031377
    ],
    [
        106.68176495112753,
        10.765519451486833
    ],
    [
        106.68170124866887,
        10.765436448923344
    ],
    [
        106.68050793539224,
        10.765810073255338
    ],
    [
        106.68016394211548,
        10.76591679070045
    ],
    [
        106.67999295129344,
        10.765970149410613
    ],
    [
        106.67982061936536,
        10.766022849361645
    ],
    [
        106.67947796717597,
        10.766129566733067
    ],
    [
        106.67866525784571,
        10.766383185026722
    ],
    [
        106.6786192551521,
        10.766397614121415
    ],
    [
        106.67844759378983,
        10.76645097274466
    ],
    [
        106.67827593241387,
        10.766504990107752
    ],
    [
        106.67810494160379,
        10.766557689963838
    ],
    [
        106.67793126855223,
        10.766611707309192
    ],
    [
        106.67776027773238,
        10.766665065895607
    ],
    [
        106.67764829551558,
        10.766700638280566
    ],
    [
        106.67758794581792,
        10.766718424471478
    ],
    [
        106.67656065976216,
        10.76703923448151
    ],
    [
        106.6765559658968,
        10.767039893228594
    ],
    [
        106.67587267314397,
        10.767253327214492
    ],
    [
        106.67570101176217,
        10.767306685688075
    ],
    [
        106.67518669818243,
        10.76746741979607
    ],
    [
        106.67518334542144,
        10.76746741979607
    ],
    [
        106.67467104350983,
        10.76762881256343
    ],
    [
        106.67465226804389,
        10.76763342378457
    ],
    [
        106.67437744761149,
        10.76771895060996
    ],
    [
        106.67454864950014,
        10.767898129360068
    ],
    [
        106.67501472296956,
        10.768542203516967
    ],
    [
        106.67502478127426,
        10.768558013373292
    ],
    [
        106.67552828993459,
        10.769254645599963
    ],
    [
        106.67575365466885,
        10.769566721233895
    ],
    [
        106.67579522890503,
        10.76962534922737
    ],
    [
        106.67587167186794,
        10.769707691898862
    ],
    [
        106.67589715286546,
        10.769734700292451
    ],
    [
        106.6760433332468,
        10.769894774361969
    ],
    [
        106.67736751501234,
        10.771280438089528
    ],
    [
        106.67754880617485,
        10.77146529822534
    ],
    [
        106.67804749414087,
        10.771900666280048
    ],
    [
        106.67903714834443,
        10.772730050091926
    ],
    [
        106.67999232931476,
        10.773526232813984
    ],
    [
        106.68170950584658,
        10.774958047678744
    ],
    [
        106.68211171521365,
        10.775296073192239
    ],
    [
        106.68239517790245,
        10.775543780061188
    ],
    [
        106.68285814245775,
        10.77594258265963
    ],
    [
        106.68276292404586,
        10.775984082496619
    ],
    [
        106.68273811361458,
        10.776013725233808
    ],
    [
        106.6826770933647,
        10.776087502700383
    ],
    [
        106.68256712279323,
        10.776258771753367
    ],
    [
        106.68203864646023,
        10.777083269685678
    ],
    [
        106.6817363421622,
        10.77755215561853
    ],
    [
        106.68170884951972,
        10.777634496121326
    ],
    [
        106.68170080289336,
        10.777660186352886
    ],
    [
        106.6816216777292,
        10.777901279191658
    ],
    [
        106.68136284456925,
        10.777950683440137
    ],
    [
        106.68102287455825,
        10.77813380844503
    ],
    [
        106.6810000757761,
        10.778145665457085
    ],
    [
        106.6806795518108,
        10.778318250781757
    ],
    [
        106.68067686960204,
        10.778318909504172
    ],
    [
        106.6806466947532,
        10.778336036286516
    ],
    [
        106.68033220574526,
        10.77850401044988
    ],
    [
        106.67859985885498,
        10.779436529560217
    ],
    [
        106.6785938238727,
        10.779438505722235
    ],
    [
        106.67776117071668,
        10.779882607175264
    ],
    [
        106.67775044187431,
        10.779888535647856
    ],
    [
        106.67750032589188,
        10.78002225557322
    ],
    [
        106.67724785015051,
        10.780157161544292
    ],
    [
        106.67724402544242,
        10.780157161544292
    ],
    [
        106.67690405516487,
        10.780339560959973
    ],
    [
        106.67689640574874,
        10.78034331816788
    ],
    [
        106.6751920899919,
        10.781261715570228
    ],
    [
        106.67038085670217,
        10.783856939926943
    ],
    [
        106.67003682057663,
        10.784043599288902
    ],
    [
        106.66928710262052,
        10.784444571009162
    ],
    [
        106.66917829566385,
        10.78450347658912
    ],
    [
        106.6688349729065,
        10.784685938895537
    ],
    [
        106.66849165017007,
        10.784870208120243
    ],
    [
        106.66841185444784,
        10.784911706727655
    ],
    [
        106.66694632547787,
        10.785692893555392
    ],
    [
        106.6655679300336,
        10.786425688360964
    ],
    [
        106.66523048356768,
        10.786602616693958
    ],
    [
        106.66492293575304,
        10.78676638130655
    ],
    [
        106.66462606379278,
        10.786925164363273
    ],
    [
        106.66462313459891,
        10.786926276778152
    ]
];

const quan3 = {
    "name": "Quận 3",
    "location": "Quận 3 \nHồ Chí Minh \nViệt Nam",
    "area": "4.92 km²",
    "population": "220.375",
    "info": "Quận 3 ngập tràn không khí náo nhiệt của các không gian ẩm thực sôi động, từ những quán cà phê sành điệu phục vụ đồ uống cà phê sáng tạo, nhà hàng Việt hiện đại thời thượng đến quán mì bình dân. Các quầy thức ăn đường phố nằm rải rác tại các điểm vui chơi của người dân địa phương như Hồ Con Rùa và Công viên Lê Văn Tám cách đó không xa. Bảo tàng Chứng tích Chiến tranh lưu giữ thông tin về các cuộc chiến tranh Việt Nam và Đông Dương thông qua hình ảnh và vũ khí, trong khi Nhà thờ Tân Định có niên đại từ thế kỷ 19 nổi tiếng với mặt tiền màu hồng độc đáo."
};
