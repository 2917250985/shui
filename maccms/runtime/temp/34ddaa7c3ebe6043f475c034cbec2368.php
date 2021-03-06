<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:60:"E:\2038050325\maccms/application/admin\view\safety\file.html";i:1647767725;s:60:"E:\2038050325\maccms\application\admin\view\public\head.html";i:1647767725;s:60:"E:\2038050325\maccms\application\admin\view\public\foot.html";i:1647767725;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title><?php echo $title; ?> - <?php echo lang('admin/public/head/title'); ?></title>
    <link rel="stylesheet" href="/static/layui/css/layui.css">
    <link rel="stylesheet" href="/static/css/admin_style.css?<?php echo $MAC_VERSION; ?>">
    <script type="text/javascript" src="/static/js/jquery.js"></script>
    <script type="text/javascript" src="/static/layui/layui.js"></script>
    <script>
        var ROOT_PATH="",ADMIN_PATH="<?php echo $_SERVER['SCRIPT_NAME']; ?>", MAC_VERSION="v10";
    </script>
</head>
<body>

<div class="page-container">
    <form class="layui-form layui-form-pane" method="get" action="">
        <input name="ck" value="1" type="hidden">
        <div class="layui-tab">
            <ul class="layui-tab-title">
                <li class="layui-this"><?php echo lang('admin/safety/file_inspect'); ?></li>
            </ul>
            <div class="layui-tab-content">
                <div class="layui-tab-item layui-show">
                    <div class="layui-input-block" >
                        <blockquote class="layui-elem-quote layui-quote-nm">
                            <?php echo lang('admin/safety/file_inspect_tip'); ?>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        <div class="layui-form-item center">
            <div class="layui-input-block">
                <input type="checkbox" lay-skin="primary" name="ft[]" value="1" title="<?php echo lang('admin/safety/file_msg3'); ?>" checked>
                <input type="checkbox" lay-skin="primary" name="ft[]" value="2" title="<?php echo lang('admin/safety/file_msg4'); ?>" checked>
                <button type="submit" class="layui-btn" ><?php echo lang('admin/safety/exec'); ?></button>
            </div>
        </div>
    </form>
</div>

<script type="text/javascript" src="/static/js/admin_common.js?<?php echo $MAC_VERSION; ?>"></script>
<script type="text/javascript">
    $(function(){
       $('.layui-btn').click(function(){
           layer.msg("<?php echo lang('wait_submit'); ?>");
       });
    });
</script>

</body>
</html>