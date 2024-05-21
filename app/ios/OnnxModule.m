//
//  OnnxModule.m
//  pokedex
//
//  Created by Wesley Guarneri on 5/21/24.
//

#import <Foundation/Foundation.h>
#import "pokedex-Bridging-Header.h"

@implementation OnnxModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(loadModel:(NSString *)modelPath resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  // Initialize ONNX Runtime
  const OrtApi* g_ort = OrtGetApiBase()->GetApi(ORT_API_VERSION);
  OrtEnv* env;
  OrtStatus* status = g_ort->CreateEnv(ORT_LOGGING_LEVEL_WARNING, "test", &env);
  
  if (status != NULL) {
    const char* msg = g_ort->GetErrorMessage(status);
    reject(@"init_error", [NSString stringWithUTF8String:msg], nil);
    g_ort->ReleaseStatus(status);
    return;
  }
  
  // Load model
  OrtSession* session;
  status = g_ort->CreateSession(env, [modelPath UTF8String], NULL, &session);
  
  if (status != NULL) {
    const char* msg = g_ort->GetErrorMessage(status);
    reject(@"load_model_error", [NSString stringWithUTF8String:msg], nil);
    g_ort->ReleaseStatus(status);
    g_ort->ReleaseEnv(env);
    return;
  }
  
  resolve(@"Model loaded successfully");
  
  // Release resources
  g_ort->ReleaseSession(session);
  g_ort->ReleaseEnv(env);
}

@end
