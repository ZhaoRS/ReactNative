//
//  ZRSViewOne.m
//  Navigator
//
//  Created by 赵瑞生 on 2017/8/21.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ZRSViewOne.h"

@interface ZRSViewOne () <RCTBridgeModule>

@property (nonatomic, copy) NSString *title;

@end

@implementation ZRSViewOne

RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(changeTitle:(NSString *)title){
  self.title = title;
}

//返回你想要的View
- (UIView *)view {
  UIView *v = [[UIView alloc] init];
  v.backgroundColor = [UIColor redColor];
  v.frame = [UIScreen mainScreen].bounds;
  
  UILabel *label = [[UILabel alloc] initWithFrame:[UIScreen mainScreen].bounds];
  label.backgroundColor = [UIColor orangeColor];
  label.text = @"这是一个自定义的ViewOne";
  [v addSubview:label];
  
  //添加一个button
  UIButton *btn = [[UIButton alloc] init];
  [btn setTitle:@"我是按钮" forState:0];
  [btn setTitle:@"我被点击了" forState:UIControlStateHighlighted];
  btn.backgroundColor = [UIColor greenColor];
  [btn addTarget:self action:@selector(btnClick) forControlEvents:UIControlEventTouchUpInside];
  btn.frame = CGRectMake(100, 100, 150, 150);
  [v addSubview:btn];
  return v;
}

- (void)btnClick {
  UIAlertController *alert = [UIAlertController alertControllerWithTitle:self.title message:@"我来了" preferredStyle:UIAlertControllerStyleAlert];
  [alert addAction:[UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:nil]];
  [alert addAction:[UIAlertAction actionWithTitle:@"确认" style:UIAlertActionStyleDefault handler:nil]];
  
  [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:alert animated:YES completion:nil];
}




@end
