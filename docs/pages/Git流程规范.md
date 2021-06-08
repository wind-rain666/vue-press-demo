# 讲在前面
Git发展到现在，已经有很多界面工具了，同时很多编辑器里面也有响应的支持插件，可以很方便的进行分支创建，代码提交。指定Git Bash为公司官方工具，不强制要求使用，可以使用自己熟悉的客户端，github desktop，小乌龟，vscode等等，都可以用。<br />
`明确一点，不管用什么，最终的结果必须是下面规定的！乱提代码，留下加班！`<br />
`补充：`不使用Git Bash提交代码并在操作中遇到了无法解决的问题，请自行解决！都是成年人，请为自己的选择负责。其他人没有义务为了你个人的喜好而学习一款软件。

# 流程概述
`背景：`以下为开发环境，仅有master分支作为保护分支。
master上的代码是项目的进度，里面的代码`必须是能够正常运行且不出bug的`!!!每个人开发都应该基于`最新`的master分支上的代码进行开发，开发完成，需要提交Merge Request（Gitlab为Merge Request，Github为Pull Request）的时候，`必须`本地merge`最新`的master分支后再提交merge request!!!

## 操作步骤
Step1. 首先clone代码，示例命令：(确保已经在gitlab中配置了ssh key，并有权限访问项目）
```bash
$ git clone git@gitlab.lantsang.cn:test/demo.git
```

Step2. clone下来的项目通常是在master分支上，写代码的时候基于此分支建立一个新分支，feature-123（123为任务编号，通常来源为issue或worktile）
```bash
$ git checkout -b feature-123  # 基于当前分支新建feature-123分支方法
```

Step3. 写完代码或者下班前都需提交代码到远端仓库，提交流程：
```bash
$ git add .  # 增加当前目录下所有改动到暂存区

$ git commit -m "这里写提交信息"  # 本地提交（注意：云端不会有commit信息，因为还没有push到云端）

$ git checkout master  # 切换到master分支

$ git pull  # 更新master分支到最新

$ git checkout feature-123  # 切换回开发分支

$ git merge master  # 合并master最新代码，注意：这里可能有冲突！！！

$ git push --set-upstream origin feature-123  # 推动到远端，并在远端新建feature-123分支，作为本地feature-123分支的上游分支，如果远端已经有了feature-123分支，则直接git push就行了，不要画蛇添足！！！
```
Step4. 提交完成，如果是下班前用来保存代码的，不需要合并，到此即可。如果是功能开发完成，打开gitlab，发起一个Merge Request（Github发起Pull Request），勾选合并后删除开发分支选项。

## 强调
1. 在执行git checkout -b 之前，`必须保证当前分支是最新的`！！！
2. 在发起Merge Request和Pull Request之前，`必须保证刚刚合并了最新的master分支代码`！！！
3. `强制：`必须学会`.gitignore`文件中的配置规则，`任何情况都不可以使用过任何GUI客户端直接ignore具体文件，必须手动配置`！！！

## 补充
### git merge 时的操作
在执行git merge命名的时候，Git Bash环境下，如果没有冲突，那么会自动增加一个commit，此时键入Ctrl + X即可。<br />
如果遇到冲突，那么不会自动增加一个commit，需要手动解决冲突，保证代码能自动运行，之后再重新commit。

## 附录
### 常用操作命令
```bash
$ git status  # 查看git状态

$ git stash  # 放弃一切本地修改，恢复到最近一次提交状态，注意：新建的文件不会放弃！！！

$ git remote prune origin  # 修剪远端分支

$ git branch  # 查看本地所有分支
$ git branch -a  # 查看所有分支，本地和远端都显示

$ git branch -d feature-123  # 删除本地feature-123分支
$ git branch -D feature-123  # 强制删除本地feature-123分支
```