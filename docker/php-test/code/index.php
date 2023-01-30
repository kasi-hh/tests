<?php
echo "halloxxxy<br>";
try {
    $dbh = new PDO('mysql:host=db;dbname=kasi', 'root', 'pwd');
    foreach ($dbh->query('SELECT * from testtable') as $row) {
        echo 'hallo' .  $row['id'] . ' - ' . $row['name'] . "<br>";
    }
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
phpinfo();
