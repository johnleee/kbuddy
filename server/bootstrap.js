// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  // if (Songs.find().count() === 0) {
  //   var sdata = [
  //     {name: "Call Me Maybe",
  //      contents: [
  //        ["I threw a wish in the well,", "0"],
  //        ["Don't ask me, I'll never tell", "1"],
  //        ["I looked to you as it fell,", "2"],
  //        ["And now you're in my way", "3"],
  //        ["I'd trade my soul for a wish,", "4"],
  //        ["Pennies and dimes for a kiss", "5"],
  //        ["I wasn't looking for this,", "6"],
  //        ["But now you're in my way", "7"],
  //        ["Your stare was holdin',", "8"],
  //        ["Ripped jeans, skin was showin'", "9"],
  //        ["Hot night, wind was blowin'", "10"],
  //        ["Where do you think you're going, baby?", "11"],
  //        ["Hey, I just met you,", "12"],
  //        ["And this is crazy,", "13"],
  //        ["But here's my number,", "14"],
  //        ["So call me, maybe!", "15"]
  //      ]
  //     },
  //     {name: "Sexy And I Know It",
  //      contents: [
  //        ["Yeah, yeah", "0"],
  //        ["When I walk on by, girls be looking like damn he fly", "1"],
  //        ["I pimp to the beat, walking on the street in my new lafreak, yeah", "2"],
  //        ["This is how I roll, animal print, pants outta control,", "3"],
  //        ["It's Redfoo with the big afro", "4",],
  //        ["And like Bruce Leroy I got the glow", "5"],
  //        ["Ah... Girl look at that body", "6"],
  //        ["Ah... Girl look at that body", "7"],
  //        ["Ah... Girl look at that body", "8"],
  //        ["Ah... I work out", "9"],
  //       ["Ah... Girl look at that body", "10"],
  //        ["Ah... Girl look at that body", "11"],
  //        ["Ah... Girl look at that body", "12"],
  //        ["Ah... I work out", "13"]
  //        ]
  //     }
  //   ];

  //   var timestamp = (new Date()).getTime();
  //   for (var i = 0; i < sdata.length; i++) {
  //     var song_id = Songs.insert({name: sdata[i].name});
  //     for (var j = 0; j < sdata[i].contents.length; j++) {
  //       var info = sdata[i].contents[j];
  //       Todos.insert({song_id: song_id,
  //                     text: info[0],
  //                     timestamp: timestamp,
  //                     tags: info.slice(1)});
  //       timestamp += 1; // ensure unique timestamp.
  //     }
  //   }
  // }


  if (Lists.find().count() === 0) {
    var data = [
      {name: "Call Me Maybe",
       contents: [
         ["I threw a wish in the well,", "0"],
         ["Don't ask me, I'll never tell", "1"],
         ["I looked to you as it fell,", "2"],
         ["And now you're in my way", "3"],
         ["I'd trade my soul for a wish,", "4"],
         ["Pennies and dimes for a kiss", "5"],
         ["I wasn't looking for this,", "6"],
         ["But now you're in my way", "7"],
         ["Your stare was holdin',", "8"],
         ["Ripped jeans, skin was showin'", "9"],
         ["Hot night, wind was blowin'", "10"],
         ["Where do you think you're going, baby?", "11"],
         ["Hey, I just met you,", "12"],
         ["And this is crazy,", "13"],
         ["But here's my number,", "14"],
         ["So call me, maybe!", "15"]
       ]
      },
      {name: "Sexy And I Know It",
       contents: [
         ["Yeah, yeah", "0"],
         ["When I walk on by, girls be looking like damn he fly", "1"],
         ["I pimp to the beat, walking on the street in my new lafreak, yeah", "2"],
         ["This is how I roll, animal print, pants outta control,", "3"],
         ["It's Redfoo with the big afro", "4",],
         ["And like Bruce Leroy I got the glow", "5"],
         ["Ah... Girl look at that body", "6"],
         ["Ah... Girl look at that body", "7"],
         ["Ah... Girl look at that body", "8"],
         ["Ah... I work out", "9"],
        ["Ah... Girl look at that body", "10"],
         ["Ah... Girl look at that body", "11"],
         ["Ah... Girl look at that body", "12"],
         ["Ah... I work out", "13"]
         ]
      }
    ];

    var timestamp = (new Date()).getTime();
    for (var i = 0; i < data.length; i++) {
      var list_id = Lists.insert({name: data[i].name});
      for (var j = 0; j < data[i].contents.length; j++) {
        var info = data[i].contents[j];
        Todos.insert({list_id: list_id,
                      text: info[0],
                      timestamp: timestamp,
                      tags: info.slice(1)});
        timestamp += 1; // ensure unique timestamp.
      }
    }
  }
});
