package com.coo.d.vote;

import org.apache.log4j.Logger;

import com.kingstar.ngbf.u.base.NgbfProcess;

/**
 * 主进程
 * 
 * @description
 * @date 2014-6-4 下午2:02:58
 * @since 0.1.0.0
 */

public final class MainProcess extends NgbfProcess {

	private static Logger logger = Logger.getLogger(MainProcess.class);

	public static void main(String[] args) {
		try {
			MainProcess process = new MainProcess();
			process.initAndStart(args);
		} catch (Exception e) {
			logger.error("应用启动失败!", e);
		}
	}
}
