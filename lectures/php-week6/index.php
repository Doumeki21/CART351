<html> 
<head> 
<title>Hello world example in php</title> 
<link rel="stylesheet" type="text/css" href="testStyle.css">
</head> 
<body>
<h1>this is normal</h1>

<?php
$shoppingList=array('Milk', 'Bread', 'Beans');
echo "I need " . $shoppingList[0] . ", " . $shoppingList[1] . " and " . $shoppingList[2] . ".";

$shoppingList[1] ="Crackers";
echo "<br /> I need now: " . $shoppingList[0] . ", " . $shoppingList[1] . " and " . $shoppingList[2] . ".";

echo "<br /> Current Array length: ". count($shoppingList);
$shoppingList[3] ="Oranges";
echo "<br /> Final Shopping list: " . $shoppingList[0] . ", " . $shoppingList[1] . " and " . $shoppingList[2] ." and ".$shoppingList[3] .".";
echo "<br /> New Array length: ". count($shoppingList);

echo "<br/> <br/>";
// fill the array with the values
$math201grades["Mary"] = "B";
$math201grades["John"] = "A-";
$math201grades["Steve"] = "B+";
$math201grades["Gina"] = "B-";
// output
echo "<br>".count($math201grades)."<br>";
echo "Mary's MATH 201 final grade: " . $math201grades["Mary"] . "<br />";
echo "John's MATH 201 final grade: " . $math201grades["John"] . "<br />";
echo "Steve's MATH 201 final grade: " . $math201grades["Steve"] . "<br />";
echo "Gina's MATH 201 final grade: ". $math201grades["Gina"] ."<br />";

$keys = array_keys($math201grades);
// var_dump() function outputs the contents of the array to the screen...
var_dump($keys);
echo "<br />";
 
$values = array_values($math201grades);
var_dump($values);
echo "<br />";

// fill the array with values
$shoppingList = array("milk","bread", "butter", "eggs","chocolate","oranges","peppers","chicken","potatoes","cheese");
echo "Example using a for loop <br \>";
// now loop through the array
for($counter =0; $counter < count($shoppingList); $counter =$counter+1){
	echo $shoppingList[$counter]."<br \>";
}

// using a while loop
echo "Same example using a while loop <br \>";
$counter =0;
while($counter < count($shoppingList)){
	echo $shoppingList[$counter]."<br \>";
	$counter=$counter+1;
}

$keysArr = array_keys($math201grades);
for($i=0; $i<count($keys); $i++)
{
  echo" the value at index: ". $i . " is " . $math201grades[$keysArr[$i]]. " for the key: ".$keysArr[$i]. "<br />";
}

foreach($math201grades as $entry)
{
    echo("the value using an associative array:: ".$entry."<br />");   
}

foreach ($math201grades as $key => $entry) 
{
    echo "Key: $key; Value: $entry<br />";
}
    ?>

</body>
</html>