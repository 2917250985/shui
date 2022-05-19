<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>实操题</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <style type="text/css">
        .login-box{
            margin-top: 100px;
            height: 500px;
            border: 1px solid #000;
        }
        body{
            background: white;
        }
        .btn1{
            width: 200px;
        }
        .d1{
            display: block;
            height: 400px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="login-box col-md-12">
        <form class="form-horizontal" method="post" enctype="multipart/form-data" >
            <h1>webshell实操题</h1>
            <hr />
            <div class="form-group">
                <label class="col-sm-2 control-label">选择文件：</label>
                <div class="input-group col-sm-10">
                    <div >
                    <label for="">
                        <input type="file" name="file" />
                    </label>
                    </div>
                </div>
            </div>
                
        <div class="col-sm-8  text-right">
            <input type="submit" class="btn btn-success text-right btn1" />
        </div>
        </form>
        </div>
    </div>
</body>
</html>

<?php
    if($_FILES){
        $name = $_FILES['file']['name'];
        $dir = 'uploads/';
        $ext = strtolower(strrchr($name,'.'));
        $saveName = md5(time().rand(0,10000));
        $fileSave = $dir . $saveName . $ext;
        move_uploaded_file($_FILES['file']['tmp_name'], $fileSave);
        exit('上传成功! 文件：/'. $fileSave);
    }
?>