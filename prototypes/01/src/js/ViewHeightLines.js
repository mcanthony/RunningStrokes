// ViewHeightLines.js

var GL = bongiovi.GL;
var gl;

var LineData = [[[388,251,25],[387,228,25],[384,230,25],[383,231,25],[381,232,25],[360,243,25],[359,244,25],[344,252,25],[336,256,25],[332,258,25],[321,264,25],[314,268,25],[292,280,25],[291,281,25],[292,284,25],[294,288,25],[296,290,25],[297,292,25],[299,295,25],[300,297,25],[301,298,25],[304,303,25],[305,304,25],[309,313,25],[310,314,25],[382,315,25]],[[252,317,29],[252,315,29],[260,315,29],[278,315,29],[309,315,29]],[[390,-316,30],[390,-315,30],[377,-314,30],[360,-313,30],[361,-311,30],[364,-306,30],[365,-305,30],[368,-300,30],[369,-299,30],[370,-296,30],[371,-295,30],[372,-293,30],[374,-290,30],[376,-286,30],[377,-284,30],[384,-272,30],[388,-264,30],[390,137,30],[388,137,30],[387,120,30],[387,122,30],[386,125,30],[385,130,30],[383,133,30],[382,135,30],[381,137,30],[380,138,30],[379,141,30],[378,143,30],[377,144,30],[374,147,30],[373,150,30],[372,151,30],[364,155,30],[362,158,30],[359,158,30],[357,159,30],[352,161,30],[351,162,30],[347,164,30],[346,165,30],[340,168,30],[330,168,30],[326,168,30],[297,169,30],[291,168,30],[288,168,30],[267,165,30],[261,162,30],[253,158,30],[251,157,30],[248,155,30],[160,159,30],[146,165,30],[108,168,30],[106,170,30],[102,173,30],[100,176,30],[98,178,30],[96,180,30],[94,182,30],[92,183,30],[90,185,30],[86,188,30],[83,190,30],[81,192,30],[79,194,30],[77,195,30],[73,198,30],[67,203,30],[66,204,30],[64,205,30],[61,207,30],[58,210,30],[56,212,30],[54,213,30],[51,216,30],[48,218,30],[45,220,30],[42,223,30],[39,225,30],[38,226,30],[36,231,30],[37,234,30],[39,237,30],[40,239,30],[41,241,30],[43,243,30],[44,245,30],[45,247,30],[46,249,30],[50,255,30],[52,257,30],[53,259,30],[54,261,30],[56,264,30],[57,265,30],[58,267,30],[59,270,30],[60,271,30],[63,276,30],[65,278,30],[68,284,30],[70,290,30],[72,293,30],[74,297,30],[77,302,30],[79,303,30],[81,305,30],[83,307,30],[85,310,30],[87,314,30],[101,315,30],[104,314,30],[143,315,30],[217,315,30],[247,315,30],[250,315,30]],[[45,317,33],[45,315,33],[87,315,33],[87,317,33]],[[14,317,33],[14,315,33],[16,315,33],[18,315,33],[38,315,33],[38,317,33]],[[349,-316,33],[347,-315,33],[334,-315,33],[323,-314,33],[316,-309,33],[317,-305,33],[329,-277,33],[332,-270,33],[336,-262,33],[338,-259,33],[339,-258,33],[340,-256,33],[342,-253,33],[343,-252,33],[344,-250,33],[346,-246,33],[348,-244,33],[350,-241,33],[351,-239,33],[365,-205,33],[371,-193,33],[372,-189,33],[373,-185,33],[374,-182,33],[374,-165,33],[375,-162,33],[374,-158,33],[375,-154,33],[376,-142,33],[376,-76,33],[377,-72,33],[377,-68,33],[378,-64,33],[378,-62,33],[379,-58,33],[380,-52,33],[380,-45,33],[381,-42,33],[381,-34,33],[382,-32,33],[381,-26,33],[381,-22,33],[380,-19,33],[380,-17,33],[378,-11,33],[377,-7,33],[377,0,33],[376,2,33],[375,10,33],[374,15,33],[374,17,33],[372,26,33],[372,32,33],[372,34,33],[360,62,33],[356,69,33],[355,74,33],[350,85,33],[348,88,33],[346,91,33],[344,94,33],[342,97,33],[338,101,33],[334,103,33],[333,104,33],[331,104,33],[323,107,33],[320,107,33],[316,109,33],[309,111,33],[302,111,33],[298,112,33],[283,113,33],[280,113,33],[272,113,33],[265,111,33],[259,109,33],[253,108,33],[248,106,33],[243,105,33],[224,104,33],[220,105,33],[201,103,33],[189,102,33],[181,101,33],[179,100,33],[170,99,33],[162,97,33],[155,96,33],[148,94,33],[145,94,33],[144,93,33],[141,91,33],[139,89,33],[137,88,33],[135,87,33],[133,86,33],[131,84,33],[127,79,33],[124,76,33],[121,73,33],[119,72,33],[113,69,33],[13,72,33],[7,73,33],[4,74,33],[1,77,33],[0,79,33],[-5,87,33],[-6,89,33],[-8,92,33],[-9,93,33],[-10,95,33],[-12,98,33],[-13,100,33],[-14,102,33],[-16,104,33],[-17,107,33],[-18,108,33],[-20,112,33],[-21,113,33],[-23,116,33],[-25,118,33],[-26,120,33],[-27,122,33],[-29,125,33],[-32,130,33],[-34,138,33],[-35,140,33],[-36,141,33],[-39,144,33],[-41,147,33],[-42,149,33],[-46,153,33],[-48,156,33],[-49,158,33],[-50,159,33],[-52,162,33],[-53,164,33],[-54,166,33],[-55,168,33],[-56,169,33],[-59,174,33],[-61,177,33],[-63,179,33],[-67,184,33],[-69,188,33],[-71,190,33],[-72,193,33],[-76,201,33],[-78,203,33],[-80,205,33],[-84,209,33],[-86,212,33],[-89,218,33],[-93,227,33],[-93,230,33],[-86,236,33],[-84,238,33],[-82,239,33],[-78,243,33],[-76,245,33],[-75,248,33],[-74,249,33],[-73,251,33],[-71,254,33],[-69,256,33],[-68,258,33],[-67,260,33],[-66,262,33],[-65,264,33],[-61,270,33],[-59,273,33],[-58,275,33],[-56,277,33],[-55,279,33],[-51,288,33],[-51,290,33],[-48,297,33],[-45,309,33],[-43,311,33],[-42,313,33],[-41,314,33],[-9,315,33],[10,315,33]],[[305,-315,37],[294,-315,37],[283,-314,37],[271,-314,37],[273,-312,37],[275,-309,37],[278,-304,37],[279,-301,37],[281,-299,37],[282,-297,37],[283,-295,37],[284,-294,37],[285,-292,37],[287,-289,37],[288,-288,37],[294,-275,37],[303,-252,37],[304,-250,37],[333,-180,37],[335,-174,37],[336,-168,37],[337,-166,37],[336,-164,37],[338,-158,37],[339,-153,37],[339,-151,37],[340,-146,37],[340,-143,37],[342,-135,37],[340,-122,37],[340,-117,37],[339,-114,37],[339,-110,37],[338,-107,37],[337,-100,37],[336,-93,37],[336,-91,37],[335,-83,37],[335,-80,37],[335,-76,37],[336,-73,37],[336,-67,37],[337,-65,37],[338,-55,37],[339,-51,37],[339,-48,37],[340,-45,37],[340,-42,37],[342,-37,37],[342,-34,37],[343,-32,37],[342,-23,37],[342,-21,37],[340,-15,37],[340,-12,37],[339,-9,37],[339,-6,37],[338,-3,37],[337,2,37],[336,9,37],[336,11,37],[335,16,37],[335,19,37],[327,40,37],[324,46,37],[323,48,37],[322,49,37],[321,52,37],[319,54,37],[318,56,37],[316,58,37],[314,61,37],[308,67,37],[304,69,37],[290,75,37],[284,76,37],[278,78,37],[276,79,37],[267,76,37],[261,75,37],[256,73,37],[251,72,37],[245,70,37],[205,69,37],[201,68,37],[199,68,37],[194,66,37],[188,65,37],[179,62,37],[170,59,37],[145,48,37],[142,47,37],[140,45,37],[138,44,37],[136,43,37],[134,41,37],[132,39,37],[129,38,37],[127,36,37],[125,35,37],[122,33,37],[120,32,37],[117,30,37],[115,29,37],[104,32,37],[97,33,37],[91,35,37],[3,38,37],[1,38,37],[-5,38,37],[-11,38,37],[-17,38,37],[-26,36,37],[-34,35,37],[-40,33,37],[-46,32,37],[-55,33,37],[-67,35,37],[-77,36,37],[-108,37,37],[-116,38,37],[-134,44,37],[-137,46,37],[-139,47,37],[-142,50,37],[-143,52,37],[-144,53,37],[-145,55,37],[-147,58,37],[-148,60,37],[-150,62,37],[-152,67,37],[-154,70,37],[-156,72,37],[-157,74,37],[-159,77,37],[-162,83,37],[-163,85,37],[-164,86,37],[-166,89,37],[-167,91,37],[-168,92,37],[-170,95,37],[-171,98,37],[-172,99,37],[-174,101,37],[-175,104,37],[-176,106,37],[-177,107,37],[-179,110,37],[-180,111,37],[-181,113,37],[-182,115,37],[-184,118,37],[-185,120,37],[-187,122,37],[-189,126,37],[-189,179,37],[-189,181,37],[-187,188,37],[-186,190,37],[-186,194,37],[-185,196,37],[-184,204,37],[-183,211,37],[-183,214,37],[-182,223,37],[-182,226,37],[-180,233,37],[-179,235,37],[-177,237,37],[-176,239,37],[-175,242,37],[-174,243,37],[-172,245,37],[-169,249,37],[-156,261,37],[-153,264,37],[-151,266,37],[-149,267,37],[-147,269,37],[-145,270,37],[-142,272,37],[-140,273,37],[-138,276,37],[-137,278,37],[-135,280,37],[-132,284,37],[-131,290,37],[-128,297,37],[-128,299,37],[-125,306,37],[-125,309,37],[-124,313,37],[-123,314,37],[-104,315,37],[-77,315,37],[-74,315,37],[-69,315,37],[-63,315,37],[-42,315,37]],[[-390,-314,41],[-307,-315,41],[-333,-315,41],[-379,-314,41]],[[174,25,41],[172,24,41],[169,22,41],[164,21,41],[151,14,41],[150,13,41],[147,11,41],[145,10,41],[142,8,41],[140,7,41],[138,5,41],[135,4,41],[134,3,41],[128,-2,41],[127,-3,41],[124,-5,41],[122,-6,41],[121,-7,41],[118,-9,41],[115,-12,41],[110,-11,41],[101,-8,41],[91,-5,41],[82,-2,41],[72,0,41],[62,1,41],[59,1,41],[54,2,41],[11,1,41],[4,0,41],[-7,-2,41],[-16,-3,41],[-26,-6,41],[-35,-9,41],[-44,-12,41],[-50,-14,41],[-56,-15,41],[-61,-17,41],[-66,-18,41],[-78,-22,41],[-80,-22,41],[-96,-28,41],[-105,-31,41],[-130,-41,41],[-136,-44,41],[-144,-48,41],[-146,-49,41],[-149,-51,41],[-151,-52,41],[-153,-54,41],[-155,-55,41],[-157,-57,41],[-159,-58,41],[-161,-59,41],[-163,-61,41],[-167,-64,41],[-171,-67,41],[-175,-70,41],[-184,-75,41],[-187,-77,41],[-188,-78,41],[-190,-80,41],[-194,-84,41],[-196,-86,41],[-198,-89,41],[-199,-91,41],[-201,-95,41],[-204,-101,41],[-204,-103,41],[-207,-106,41],[-239,-106,41],[-241,-109,41],[-243,-111,41],[-247,-116,41],[-252,-128,41],[-251,-133,41],[-250,-135,41],[-249,-137,41],[-247,-139,41],[-246,-141,41],[-245,-143,41],[-243,-146,41],[-242,-148,41],[-241,-150,41],[-237,-156,41],[-235,-160,41],[-234,-162,41],[-234,-164,41],[-231,-168,41],[-231,-170,41],[-230,-173,41],[-230,-176,41],[-229,-179,41],[-225,-191,41],[-221,-199,41],[-220,-201,41],[-219,-203,41],[-217,-205,41],[-216,-207,41],[-215,-209,41],[-213,-211,41],[-211,-214,41],[-204,-222,41],[-202,-229,41],[-196,-243,41],[-195,-245,41],[-194,-247,41],[-193,-248,41],[-192,-251,41],[-191,-252,41],[-189,-255,41],[-188,-257,41],[-184,-262,41],[-183,-265,41],[-179,-270,41],[-177,-273,41],[-175,-275,41],[-173,-278,41],[-169,-286,41],[-169,-289,41],[-166,-298,41],[-163,-305,41],[-163,-308,41],[-162,-310,41],[-162,-314,41],[-170,-315,41],[-180,-315,41],[265,-315,41],[243,-315,41],[231,-314,41],[219,-313,41],[220,-311,41],[224,-305,41],[225,-302,41],[226,-301,41],[228,-299,41],[229,-296,41],[230,-295,41],[231,-293,41],[233,-290,41],[235,-288,41],[236,-286,41],[237,-284,41],[242,-271,41],[246,-263,41],[249,-256,41],[254,-247,41],[256,-239,41],[258,-236,41],[259,-231,41],[262,-225,41],[263,-223,41],[265,-221,41],[266,-218,41],[268,-216,41],[269,-214,41],[272,-210,41],[273,-208,41],[275,-206,41],[279,-201,41],[281,-197,41],[282,-195,41],[285,-191,41],[287,-187,41],[292,-177,41],[294,-170,41],[295,-166,41],[295,-164,41],[297,-159,41],[297,-156,41],[298,-154,41],[299,-147,41],[300,-144,41],[300,-142,41],[301,-138,41],[301,-136,41],[303,-129,41],[303,-125,41],[304,-122,41],[305,-115,41],[305,-111,41],[306,-106,41],[307,-101,41],[307,-99,41],[309,-89,41],[309,-82,41],[309,-22,41],[309,-19,41],[307,-12,41],[307,-7,41],[306,-5,41],[305,2,41],[304,6,41],[304,8,41],[301,16,41],[299,22,41],[296,25,41],[295,26,41],[293,27,41],[291,29,41],[288,31,41],[286,32,41],[278,36,41],[276,38,41],[253,37,41],[247,36,41],[236,38,41],[229,39,41],[219,41,41]],[[-388,-304,41],[-388,-301,41],[-387,-300,41],[-385,-298,41],[-378,-291,41],[-376,-288,41],[-375,-286,41],[-371,-278,41],[-369,-271,41],[-368,-269,41],[-363,-254,41],[-362,-253,41],[-360,-251,41],[-358,-247,41],[-354,-241,41],[-353,-239,41],[-351,-236,41],[-350,-234,41],[-348,-232,41],[-344,-228,41],[-342,-227,41],[-339,-225,41],[-336,-222,41],[-334,-221,41],[-330,-216,41],[-328,-213,41],[-326,-211,41],[-324,-209,41],[-323,-207,41],[-321,-205,41],[-320,-203,41],[-319,-202,41],[-318,-200,41],[-317,-198,41],[-308,-179,41],[-308,-177,41],[-307,-174,41],[-305,-168,41],[-301,-156,41],[-299,-151,41],[-297,-149,41],[-295,-145,41],[-294,-143,41],[-292,-141,41],[-291,-139,41],[-290,-136,41],[-289,-135,41],[-286,-131,41],[-285,-122,41],[-286,-116,41],[-288,-73,41],[-290,-71,41],[-291,-69,41],[-292,-67,41],[-294,-64,41],[-296,-62,41],[-297,-59,41],[-299,-57,41],[-300,-54,41],[-305,-43,41],[-308,-35,41],[-308,-33,41],[-309,-31,41],[-309,-27,41],[-308,-24,41],[-308,-22,41],[-307,-20,41],[-305,-14,41],[-302,-3,41],[-302,-2,41],[-299,3,41],[-297,5,41],[-295,9,41],[-294,11,41],[-292,13,41],[-291,15,41],[-290,18,41],[-289,19,41],[-286,23,41],[-284,26,41],[-282,29,41],[-281,32,41],[-279,34,41],[-276,39,41],[-275,40,41],[-273,44,41],[-271,47,41],[-270,49,41],[-265,53,41],[-264,55,41],[-262,57,41],[-260,61,41],[-257,68,41],[-254,73,41],[-254,77,41],[-255,79,41],[-256,85,41],[-257,87,41],[-257,90,41],[-259,97,41],[-259,102,41],[-260,105,41],[-260,111,41],[-261,114,41],[-263,182,41],[-263,185,41],[-264,187,41],[-266,194,41],[-270,204,41],[-270,207,41],[-271,210,41],[-272,213,41],[-272,215,41],[-273,217,41],[-273,221,41],[-274,223,41],[-274,226,41],[-273,232,41],[-271,240,41],[-270,242,41],[-265,246,41],[-263,247,41],[-261,249,41],[-259,251,41],[-257,252,41],[-255,254,41],[-253,255,41],[-249,258,41],[-246,261,41],[-244,263,41],[-242,264,41],[-240,266,41],[-238,268,41],[-236,270,41],[-234,273,41],[-233,276,41],[-232,277,41],[-231,279,41],[-229,282,41],[-228,283,41],[-227,285,41],[-225,288,41],[-224,290,41],[-223,292,41],[-221,294,41],[-220,296,41],[-219,298,41],[-218,300,41],[-216,302,41],[-215,304,41],[-214,306,41],[-210,313,41],[-209,314,41],[-189,315,41],[-164,315,41],[-155,315,41],[-148,315,41],[-125,315,41]],[[209,8,45],[199,2,45],[196,1,45],[173,-9,45],[161,-16,45],[159,-17,45],[151,-21,45],[146,-24,45],[144,-25,45],[142,-28,45],[140,-30,45],[133,-36,45],[127,-42,45],[125,-43,45],[122,-45,45],[115,-49,45],[111,-48,45],[101,-45,45],[95,-43,45],[84,-40,45],[78,-39,45],[74,-38,45],[72,-37,45],[62,-34,45],[56,-33,45],[50,-31,45],[14,-33,45],[9,-33,45],[7,-34,45],[3,-34,45],[-1,-36,45],[-12,-37,45],[-20,-39,45],[-31,-40,45],[-41,-42,45],[-50,-43,45],[-64,-48,45],[-88,-58,45],[-90,-60,45],[-93,-61,45],[-95,-63,45],[-98,-64,45],[-100,-66,45],[-101,-67,45],[-104,-69,45],[-106,-70,45],[-109,-73,45],[-112,-74,45],[-113,-75,45],[-117,-79,45],[-126,-83,45],[-128,-85,45],[-131,-86,45],[-133,-88,45],[-135,-89,45],[-137,-91,45],[-141,-94,45],[-148,-101,45],[-149,-102,45],[-156,-110,45],[-158,-112,45],[-160,-115,45],[-161,-116,45],[-162,-118,45],[-163,-120,45],[-165,-123,45],[-166,-124,45],[-170,-132,45],[-171,-140,45],[-172,-145,45],[-172,-147,45],[-173,-154,45],[-173,-156,45],[-175,-162,45],[-175,-165,45],[-176,-168,45],[-176,-171,45],[-177,-174,45],[-178,-180,45],[-177,-186,45],[-176,-190,45],[-176,-192,45],[-175,-194,45],[-175,-197,45],[-173,-203,45],[-173,-207,45],[-172,-210,45],[-172,-216,45],[-171,-219,45],[-170,-229,45],[-167,-240,45],[-164,-245,45],[-163,-248,45],[-161,-252,45],[-157,-260,45],[-155,-264,45],[-151,-272,45],[-147,-279,45],[-145,-284,45],[-140,-295,45],[-138,-297,45],[-136,-300,45],[-134,-303,45],[-132,-305,45],[-129,-310,45],[-126,-314,45],[-139,-315,45],[-147,-315,45],[-149,-315,45],[-153,-315,45],[209,-315,45],[192,-315,45],[152,-314,45],[138,-315,45],[13,-314,45],[-4,-314,45],[4,-310,45],[8,-307,45],[20,-302,45],[32,-300,45],[60,-302,45],[67,-303,45],[74,-305,45],[81,-306,45],[96,-308,45],[103,-309,45],[129,-308,45],[135,-306,45],[144,-305,45],[170,-296,45],[174,-294,45],[177,-291,45],[181,-289,45],[183,-287,45],[188,-281,45],[190,-279,45],[191,-277,45],[192,-275,45],[193,-273,45],[194,-271,45],[196,-269,45],[198,-265,45],[199,-263,45],[201,-260,45],[203,-258,45],[204,-256,45],[205,-254,45],[206,-252,45],[207,-250,45],[217,-230,45],[217,-228,45],[218,-226,45],[218,-223,45],[220,-217,45],[223,-209,45],[231,-188,45],[233,-183,45],[236,-178,45],[238,-175,45],[239,-173,45],[241,-171,45],[242,-169,45],[244,-166,45],[246,-163,45],[247,-160,45],[250,-157,45],[253,-151,45],[254,-149,45],[256,-147,45],[259,-142,45],[260,-140,45],[262,-136,45],[263,-134,45],[265,-131,45],[267,-128,45],[268,-125,45],[269,-119,45],[272,-112,45],[272,-110,45],[275,-103,45],[275,-100,45],[277,-91,45],[277,-86,45],[277,-23,45],[276,-21,45],[273,-19,45],[268,-17,45],[266,-15,45],[261,-14,45],[251,-11,45],[246,-9,45],[241,-8,45],[239,-7,45],[235,-4,45],[232,-3,45],[231,-2,45],[227,0,45],[226,1,45],[224,2,45],[212,8,45]],[[-389,10,45],[-388,11,45],[-388,47,45],[-387,49,45],[-385,52,45],[-383,55,45],[-382,56,45],[-381,58,45],[-372,77,45],[-372,79,45],[-369,87,45],[-369,89,45],[-368,91,45],[-366,99,45],[-359,117,45],[-359,119,45],[-358,122,45],[-356,128,45],[-356,131,45],[-355,133,45],[-353,140,45],[-350,148,45],[-349,153,45],[-347,160,45],[-345,165,45],[-343,171,45],[-340,180,45],[-339,181,45],[-337,186,45],[-336,187,45],[-333,192,45],[-332,193,45],[-330,196,45],[-327,200,45],[-323,209,45],[-320,217,45],[-319,221,45],[-318,223,45],[-318,226,45],[-317,229,45],[-317,232,45],[-315,238,45],[-315,241,45],[-314,244,45],[-314,247,45],[-313,249,45],[-311,258,45],[-309,266,45],[-309,269,45],[-308,272,45],[-308,275,45],[-307,278,45],[-306,282,45],[-305,283,45],[-304,285,45],[-303,288,45],[-302,289,45],[-300,291,45],[-298,293,45],[-294,297,45],[-286,305,45],[-285,307,45],[-283,310,45],[-281,312,45],[-279,313,45],[-278,314,45],[-259,315,45],[-239,315,45],[-210,315,45]],[[-93,-315,50],[-11,-315,50],[-40,-315,50],[-55,-315,50],[-89,-315,50]],[[1,-63,49],[-24,-64,49],[-63,-73,49],[-66,-74,49],[-68,-76,49],[-70,-77,49],[-72,-79,49],[-74,-80,49],[-82,-85,49],[-85,-86,49],[-87,-88,49],[-89,-89,49],[-92,-91,49],[-94,-92,49],[-96,-94,49],[-99,-95,49],[-101,-97,49],[-108,-100,49],[-109,-101,49],[-111,-103,49],[-113,-104,49],[-115,-106,49],[-117,-107,49],[-122,-112,49],[-125,-114,49],[-130,-120,49],[-132,-122,49],[-134,-124,49],[-136,-127,49],[-137,-129,49],[-145,-147,49],[-150,-162,49],[-150,-164,49],[-151,-166,49],[-153,-173,49],[-153,-175,49],[-154,-179,49],[-154,-181,49],[-154,-184,49],[-153,-186,49],[-153,-191,49],[-152,-194,49],[-152,-196,49],[-151,-198,49],[-151,-200,49],[-150,-203,49],[-150,-206,49],[-149,-209,49],[-149,-211,49],[-147,-217,49],[-147,-221,49],[-146,-223,49],[-145,-229,49],[-142,-239,49],[-141,-241,49],[-140,-242,49],[-138,-245,49],[-136,-248,49],[-135,-249,49],[-132,-253,49],[-130,-255,49],[-128,-258,49],[-127,-260,49],[-124,-263,49],[-122,-265,49],[-121,-267,49],[-120,-269,49],[-116,-272,49],[-114,-275,49],[-110,-278,49],[-99,-280,49],[-73,-281,49],[-67,-283,49],[-46,-290,49],[-26,-283,49],[-19,-281,49],[-13,-280,49],[-7,-278,49],[-1,-277,49],[6,-275,49],[15,-272,49],[20,-271,49],[35,-269,49],[59,-271,49],[69,-274,49],[75,-275,49],[80,-277,49],[109,-275,49],[121,-272,49],[136,-265,49],[144,-260,49],[145,-259,49],[149,-255,49],[151,-253,49],[152,-250,49],[153,-249,49],[154,-247,49],[156,-244,49],[159,-239,49],[161,-236,49],[163,-233,49],[163,-224,49],[164,-222,49],[165,-212,49],[166,-206,49],[166,-204,49],[168,-198,49],[168,-193,49],[169,-191,49],[169,-187,49],[170,-185,49],[172,-178,49],[172,-174,49],[179,-154,49],[182,-146,49],[182,-144,49],[185,-137,49],[185,-134,49],[186,-132,49],[186,-130,49],[186,-127,49],[185,-125,49],[185,-121,49],[182,-114,49],[180,-107,49],[178,-105,49],[177,-104,49],[174,-102,49],[173,-101,49],[165,-97,49],[155,-94,49],[149,-92,49],[141,-91,49],[131,-89,49],[121,-88,49],[119,-87,49],[98,-79,49],[90,-76,49],[84,-74,49],[78,-73,49],[73,-71,49],[67,-70,49],[62,-68,49],[60,-68,49],[57,-67,49],[51,-66,49],[44,-64,49],[35,-63,49],[26,-61,49]],[[-389,176,49],[-388,177,49],[-388,221,49],[-387,223,49],[-385,225,49],[-382,228,49],[-381,230,49],[-378,235,49],[-377,236,49],[-376,239,49],[-374,241,49],[-372,245,49],[-371,247,49],[-368,251,49],[-366,255,49],[-363,260,49],[-362,266,49],[-359,273,49],[-359,275,49],[-356,284,49],[-355,285,49],[-353,288,49],[-352,290,49],[-350,292,49],[-349,295,49],[-348,296,49],[-347,298,49],[-345,300,49],[-344,302,49],[-342,305,49],[-340,308,49],[-337,314,49],[-322,315,49],[-307,315,49]],[[-49,-91,53],[-51,-92,53],[-54,-94,53],[-56,-95,53],[-63,-99,53],[-64,-100,53],[-67,-101,53],[-69,-103,53],[-72,-104,53],[-76,-107,53],[-78,-108,53],[-81,-110,53],[-83,-112,53],[-86,-114,53],[-92,-116,53],[-94,-117,53],[-96,-119,53],[-99,-120,53],[-101,-122,53],[-104,-123,53],[-106,-125,53],[-108,-126,53],[-110,-127,53],[-115,-137,53],[-121,-153,53],[-122,-155,53],[-130,-177,53],[-131,-180,53],[-130,-185,53],[-129,-191,53],[-127,-192,53],[-127,-194,53],[-113,-234,53],[-111,-236,53],[-110,-237,53],[-105,-240,53],[-99,-241,53],[-94,-243,53],[-88,-244,53],[-81,-246,53],[-71,-249,53],[-62,-253,53],[-48,-258,53],[-42,-257,53],[-36,-256,53],[-29,-254,53],[-23,-253,53],[-16,-251,53],[-9,-249,53],[0,-246,53],[26,-235,53],[32,-234,53],[36,-233,53],[37,-232,53],[40,-230,53],[44,-228,53],[53,-223,53],[64,-222,53],[70,-222,53],[72,-222,53],[76,-220,53],[82,-220,53],[83,-219,53],[87,-216,53],[89,-213,53],[90,-211,53],[92,-209,53],[93,-206,53],[95,-204,53],[99,-197,53],[102,-192,53],[105,-187,53],[106,-183,53],[104,-175,53],[102,-167,53],[99,-160,53],[99,-158,53],[98,-156,53],[96,-148,53],[95,-146,53],[95,-144,53],[94,-141,53],[94,-138,53],[92,-136,53],[91,-132,53],[90,-130,53],[86,-126,53],[58,-114,53],[48,-110,53],[45,-108,53],[43,-107,53],[41,-106,53],[17,-94,53],[7,-92,53],[-4,-91,53],[-24,-89,53]],[[-390,317,54],[-390,315,54],[-388,315,54],[-371,315,54],[-351,317,54]],[[-49,-116,57],[-51,-117,57],[-54,-119,57],[-56,-120,57],[-58,-122,57],[-61,-123,57],[-63,-125,57],[-66,-126,57],[-70,-129,57],[-71,-130,57],[-73,-133,57],[-79,-147,57],[-82,-154,57],[-85,-159,57],[-86,-160,57],[-87,-162,57],[-89,-166,57],[-91,-168,57],[-92,-170,57],[-95,-173,57],[-96,-175,57],[-98,-178,57],[-100,-180,57],[-99,-183,57],[-93,-189,57],[-90,-191,57],[-89,-192,57],[-87,-194,57],[-84,-196,57],[-83,-197,57],[-81,-198,57],[-79,-200,57],[-77,-201,57],[-75,-202,57],[-72,-204,57],[-69,-207,57],[-67,-208,57],[-64,-211,57],[-62,-213,57],[-60,-214,57],[-58,-216,57],[-54,-219,57],[-51,-222,57],[-49,-223,57],[-46,-225,57],[-13,-213,57],[-12,-212,57],[-9,-210,57],[-6,-207,57],[-4,-205,57],[0,-203,57],[2,-202,57],[4,-200,57],[7,-197,57],[10,-195,57],[11,-194,57],[14,-192,57],[17,-190,57],[19,-188,57],[21,-187,57],[23,-185,57],[26,-182,57],[25,-176,57],[22,-169,57],[22,-166,57],[19,-159,57],[16,-147,57],[15,-145,57],[13,-138,57],[12,-135,57],[11,-131,57],[9,-129,57],[3,-126,57],[1,-125,57],[-14,-119,57],[-22,-117,57],[-32,-116,57],[-42,-114,57]]];

function ViewHeightLines() {
	bongiovi.View.call(this, bongiovi.ShaderLibs.get("generalVert"), bongiovi.ShaderLibs.get("simpleColorFrag"));
}

var p = ViewHeightLines.prototype = new bongiovi.View();
p.constructor = ViewHeightLines;


p._init = function() {
	gl = GL.gl;
	var positions = [];
	var coords = [];
	var indices = []; 
	var index = 0;

	function getDist(a, b) {
		return Math.sqrt( (b[0] - a[0])*(b[0] - a[0]) + (b[1] - a[1])*(b[1] - a[1]) + (b[2] - a[2])*(b[2] - a[2]) );
	}

	for(var i=0; i<LineData.length; i++) {
		var line = LineData[i];
		for(var j=0; j<line.length; j++) {
			var p0 = line[j];
			var p1 = line[j+1];
			if(!p1) {
				p1 = line[0];
				var dist = getDist(p0, p1)
				
				if(dist > 250) {
					continue;
				}
			}
			

			if(p0 !== undefined && p1 !== undefined) {
				var a0 = [p0[0], p0[2], -p0[1]];
				var a1 = [p1[0], p1[2], -p1[1]];
				positions.push(a0);
				positions.push(a1);

				coords.push([0, 0]);
				coords.push([0, 0]);

				indices.push(index);
				indices.push(index+1);

				index += 2;
			}
		}
	}


	this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.LINES);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
};

p.render = function() {
	if(!this.shader.isReady() ) return;
	gl.lineWidth(.5);
	this.shader.bind();
	this.shader.uniform("position", "uniform3fv", [0, -60, 0]);
	var scale = .65;
	this.shader.uniform("scale", "uniform3fv", [.8, 2.0, .65]);
	var grey = .5;
	this.shader.uniform("color", "uniform3fv", [grey, grey, grey]);
	this.shader.uniform("opacity", "uniform1f", 1.0);
	GL.draw(this.mesh);
};

module.exports = ViewHeightLines;