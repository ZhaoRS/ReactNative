//
//  ZRSViewManager.m
//  Navigator
//
//  Created by 赵瑞生 on 2017/8/21.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ZRSViewManager.h"

@implementation ZRSViewManager

RCT_EXPORT_MODULE()

//返回你想要的View
- (UIView *)view  {
  UIView *v = [[UIView alloc] init];
  v.backgroundColor = [UIColor redColor];
  v.frame = [UIScreen mainScreen].bounds;
  
  UILabel *label = [[UILabel alloc] initWithFrame:[UIScreen mainScreen].bounds];
  label.backgroundColor = [UIColor orangeColor];
  label.text = @"这是一个自定义的gView";
  [v addSubview:label];
  
  
  return v;
}

@end
