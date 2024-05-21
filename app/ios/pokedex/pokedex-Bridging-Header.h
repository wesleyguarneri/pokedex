//
//  Use this file to import your target's public headers that you would like to expose to Swift.
//
#import <React/RCTBridgeModule.h>
#import <onnxruntime/core/session/onnxruntime_c_api.h>

@interface OnnxModule : NSObject <RCTBridgeModule>
@end
