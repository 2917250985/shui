//
// 基础信息模板
// 获取：当前路径、磁盘列表
//

module.exports = () => ({
  info: 'yv66vgAAADEBCQoAOQB4CQBbAHkJAFsAeggAewkAWwB8CAB9CQBbAH4IAH8JAFsAgAoAWwCBBwCCCgALAHgIAIMIAIQIAIUIAIYLADMAhwsAMgCICwAzAIgLADIAiQoAWwCKCQBbAIsKAFsAjAoACwCNBwCOBwCPCgAaAHgIAJAKABoAkQoAGQCSCgAaAJILADMAkwoACwCSCgBbAJQKAJUAlggAlwoAmACZCACaCACbCgBbAJwIAJ0IAJ4KAEkAnwoAoAChCgCgAJIKABoAogoAOQCjCgA3AKQHAKUHAKYHAKcIAKgKADcAqQgAqgcAqwoANwCsBwCtCgCuAK8IALAIAFwKADcAsQoAsgCzCgCyALQIAF4KAFsAtQcAtggAtwcAuAkAuQC6CgCuALMKADcAuwoAuQC8BwC9CgA3AL4KAL8AwAoAOQCSCgC5AMEKAEkAwgoASQDDCgBJAMQIAMUIAMYKAEkAxwgAyAgAyQoANwDKCAByCADLCADMCgA3AM0HAM4BAAdyZXF1ZXN0AQAnTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3Q7AQAIcmVzcG9uc2UBAChMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2U7AQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAQZGVjb2RlckNsYXNzZGF0YQEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAAtTeXNJbmZvQ29kZQEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAPV3d3Um9vdFBhdGhDb2RlAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhwYXJzZU9iagEAFShMamF2YS9sYW5nL09iamVjdDspVgEACGFzb3V0cHV0AQAGZGVjb2RlAQAKRXhjZXB0aW9ucwEAEkJhc2U2NERlY29kZVRvQnl0ZQEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAApTb3VyY2VGaWxlAQAJSW5mby5qYXZhDABlAGYMAFwAXQwAXgBfAQAGYmFzZTY0DABgAGEBAA9hbnRzd29yZENoYXJzZXQMAGIAYQEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABjAGEMAG8AcAEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAMtPnwBAAN8PC0BABJhbnRzd29yZGFyZ2RlY29kZXIBAAl0ZXh0L2h0bWwMAM8A0AwA0QDQDADSAG4MAHIAbgwAZABhDABrAGwMANMA1AEAE2phdmEvbGFuZy9FeGNlcHRpb24BABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwA0wDVDADWAGwMANcA2AwAcQBuBwDZDADaANABAAh1c2VyLmRpcgcA2wwA3ABuAQAHb3MubmFtZQEACXVzZXIubmFtZQwAbQBuAQABCQEAAS8MAN0A3gcA3wwA4ADhDADTAOIMAOMA5AwA5QDmAQATW0xqYXZhL2xhbmcvT2JqZWN0OwEAJWphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3QBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0DADnAOgBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDADpAOoBABBqYXZhL2xhbmcvT2JqZWN0BwDrDADsAO0BAAtnZXRSZXNwb25zZQwA7gDvBwDwDADxAPIMAPMA9AwAdAB1AQAVamF2YS9sYW5nL0NsYXNzTG9hZGVyAQALZGVmaW5lQ2xhc3MBAAJbQgcA9QwA9gD3DAD4APkMAPoA+wEAEGphdmEvbGFuZy9TdHJpbmcMAPwA/QcA/gwA/wEADAEBAQIMAQMBBAwAaQBqDABlAQUBAAxqYXZhLnZlcnNpb24BAAMxLjkMAQYBAgEAEGphdmEudXRpbC5CYXNlNjQBAApnZXREZWNvZGVyDAEHAOoBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAD/AQgBAAliYXNlL0luZm8BAA5zZXRDb250ZW50VHlwZQEAFShMamF2YS9sYW5nL1N0cmluZzspVgEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQAQamF2YS9sYW5nL1N5c3RlbQEAC2dldFByb3BlcnR5AQAKc3RhcnRzV2l0aAEAFShMamF2YS9sYW5nL1N0cmluZzspWgEADGphdmEvaW8vRmlsZQEACWxpc3RSb290cwEAESgpW0xqYXZhL2lvL0ZpbGU7AQA1KExqYXZhL2xhbmcvQ2hhclNlcXVlbmNlO0lJKUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBAAdpc0FycmF5AQADKClaAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABFnZXREZWNsYXJlZE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABBnZXREZWNsYXJlZEZpZWxkAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL3JlZmxlY3QvRmllbGQ7AQAXamF2YS9sYW5nL3JlZmxlY3QvRmllbGQBAA1zZXRBY2Nlc3NpYmxlAQAEKFopVgEAA2dldAEAJihMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQARamF2YS9sYW5nL0ludGVnZXIBAARUWVBFAQARTGphdmEvbGFuZy9DbGFzczsBAA5nZXRDbGFzc0xvYWRlcgEAGSgpTGphdmEvbGFuZy9DbGFzc0xvYWRlcjsBAAd2YWx1ZU9mAQAWKEkpTGphdmEv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',
  // 检测数据库函数支持
  probedb: 'yv66vgAAADEBAwoAOQB3CQBbAHgJAFsAeQgAegkAWwB7CAB8CQBbAH0IAH4JAFsAfwoAWwCABwCBCgALAHcIAIIIAIMIAIQIAIULADQAhgsAMwCHCwA0AIcLADMAiAoAWwCJCQBbAIoKAFsAiwoACwCMBwCNBwCOCgAaAHcIAI8KABoAkAoAGQCRCgAaAJELADQAkgoACwCRCgBbAJMKAJQAlQcAlggAlwgAmAgAmQgAmggAmwgAnAgAnQgAngoANwCfCACgCAChCgA5AKIKADcAowcApAcApQcApggApwgAqAcAqQoANwCqBwCrCgCsAK0IAK4IAFwKADcArwoAsACxCgCwALIIAF4KAFsAswcAtAgAtQcAtgkAtwC4CgCsALEKADcAuQoAtwC6CgA3ALsKALwAvQoAOQCRCgC3AL4KACQAvwoAJADACgAkAMEIAMIKAMMAxAgAxQoAJADGCADHCADICgA3AMkIAHEIAMoIAMsKADcAzAcAzQEAB3JlcXVlc3QBACdMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdDsBAAhyZXNwb25zZQEAKExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZTsBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAxyYW5kb21QcmVmaXgBABBkZWNvZGVyQ2xhc3NkYXRhAQAGPGluaXQ+AQADKClWAQAEQ29kZQEAD0xpbmVOdW1iZXJUYWJsZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEAC1Byb2JlZGJDb2RlAQA7KExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OylMamF2YS9sYW5nL1N0cmluZzsBAAhwYXJzZU9iagEAFShMamF2YS9sYW5nL09iamVjdDspVgEACGFzb3V0cHV0AQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAZkZWNvZGUBAApFeGNlcHRpb25zAQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBAAxQcm9iZWRiLmphdmEMAGUAZgwAXABdDABeAF8BAAZiYXNlNjQMAGAAYQEAD2FudHN3b3JkQ2hhcnNldAwAYgBhAQAUYW50c3dvcmRyYW5kb21QcmVmaXgMAGMAYQwAbQBuAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAy0+fAEAA3w8LQEAEmFudHN3b3JkYXJnZGVjb2RlcgEACXRleHQvaHRtbAwAzgDPDADQAM8MANEAcAwAcQBwDABkAGEMAGsAbAwA0gDTAQATamF2YS9sYW5nL0V4Y2VwdGlvbgEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDADSANQMANUA1gwA1wDYDABvAHAHANkMANoAzwEAEGphdmEvbGFuZy9TdHJpbmcBABVjb20ubXlzcWwuamRiYy5Ecml2ZXIBABhjb20ubXlzcWwuY2ouamRiYy5Ecml2ZXIBAB9vcmFjbGUuamRiYy5kcml2ZXIuT3JhY2xlRHJpdmVyAQAVb3JnLnBvc3RncmVzcWwuRHJpdmVyAQAhd2VibG9naWMuamRiYy5tc3NxbHNlcnZlcjQuRHJpdmVyAQAsY29tLm1pY3Jvc29mdC5zcWxzZXJ2ZXIuamRiYy5TUUxTZXJ2ZXJEcml2ZXIBABhjb20uaW5ldC5wb29sLlBvb2xEcml2ZXIBAAAMANsA3AEAAwkxCgEAAwkwCgwA3QDeDADfAOABABNbTGphdmEvbGFuZy9PYmplY3Q7AQAlamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdAEAJmphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlAQAdamF2YXguc2VydmxldC5qc3AuUGFnZUNvbnRleHQBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDADhAOIBABBqYXZhL2xhbmcvT2JqZWN0BwDjDADkAOUBAAtnZXRSZXNwb25zZQwA5gDnBwDoDADpAOoMAOsA7AwAcwB0AQAVamF2YS9sYW5nL0NsYXNzTG9hZGVyAQALZGVmaW5lQ2xhc3MBAAJbQgcA7QwA7gDvDADwAPEMAPIA8wwA9AD1BwD2DAD3APgMAPkA+gwA+wD8DABpAGoMAGUA/QEADGphdmEudmVyc2lvbgcA/gwA/wBwAQADMS45DAEAAPoBABBqYXZhLnV0aWwuQmFzZTY0AQAKZ2V0RGVjb2RlcgwBAQDiAQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgEADGRlY29kZUJ1ZmZlcgwA9wECAQAMYmFzZS9Qcm9iZWRiAQAOc2V0Q29udGVudFR5cGUBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBAAdpc0FycmF5AQADKClaAQARZ2V0RGVjbGFyZWRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAQZ2V0RGVjbGFyZWRGaWVsZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9yZWZsZWN0L0ZpZWxkOwEAF2phdmEvbGFuZy9yZWZsZWN0L0ZpZWxkAQANc2V0QWNjZXNzaWJsZQEABChaKVYBAANnZXQBACYoTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEAEWphdmEvbGFuZy9JbnRlZ2VyAQAEVFlQRQEAEUxqYXZhL2xhbmcvQ2xhc3M7AQAOZ2V0Q2xhc3NMb2FkZXIBABkoKUxqYXZhL2xh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',
})
  