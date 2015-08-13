$(function () {
  var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  
  // ALL YOUR CODE BELOW HERE //
  
  var allGuardians = $.merge(oldGuardians,newGuardians);
  
  var heroNames = $.map(allGuardians, function(item){
    var name = item.name;
    var space = name.indexOf(' ');
    //return space === -1 ? name : (name.substring(0, space));
    //try using split
    return name.split(' ')[0];
  });
  
  heroNames = heroNames.filter(function(val){
    return val.toLowerCase !== "groot";
  });

  var createTable = function(array, target) {

    var createRow = function(hero) {
      var $row = $('<tr>');
      var $name = $('<td>').text(hero.name);
      var $notes = $('<td>').text(hero.notes || "No Data Available");
      $row.append($name, $notes);
      return $row;
    };
    var $table = $('<table>').css({
      'margin' : '20px',
      
    });
    var $header = $('<thead>').append([
      $('<th>').text("Name"),
      $('<th>').text("Notes")
      ]);
    var $rows = array.map(createRow);

    $table.append($header);
    $table.append($rows);
    $table.appendTo(target);

    $table.find('tr td').css({
      'border' : '1px solid #ccc',
      'padding' : '0.5rem',
      'text-align' : 'left',
      'font-family' : 'monospace',
      'color' : 'rgb(20,20,100)',
      'background-color' : 'rgb(220,230,250)',
    });
  };

  createTable(allGuardians, $('body'));

  // ALL YOUR CODE ABOVE HERE //
});




// <table>
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>ID</th>
//       <th>Favorite Color</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Jim</td>
//       <td>00001</td>
//       <td>Blue</td>
//     </tr>
//     <tr>
//       <td>Sue</td>
//       <td>00002</td>
//       <td>Red</td>
//     </tr>
//     <tr>
//       <td>Barb</td>
//       <td>00003</td>
//       <td>Green</td>
//     </tr>
//   </tbody>
// </table>





















