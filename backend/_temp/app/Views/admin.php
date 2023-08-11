
<!DOCTYPE html>
<html lang="en">
    <head>
        <?php 
            include"admin/head.php" ;
        ?>
        <?php 
            include $css ; 
        ?>
    </head>

<body>
    <div class="wrapper overlay-sidebar">
        <?php 
            include"admin/navbar.php" ;
        ?>
        
        <div class="main-panel">
            <div class="content">
                <?php
                    include $content ;
                ?>
            </div>
        </div>
    </div>
        <?php
            include "admin/js.php";
        ?>
        <?php
            include $script ;
        ?>
</body>

</html>