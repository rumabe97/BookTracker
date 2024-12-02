package com.booktracker

import android.content.Intent
import android.net.Uri
import android.os.Build
import android.util.Log
import androidx.core.content.FileProvider
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import java.io.File

class InstallerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "InstallerModule"
    }

    @ReactMethod
    fun installApk(filePath: String, promise: Promise) {
        try {
            val file = File(filePath)
            if (file.exists()) {
                val uri: Uri
                val intent = Intent(Intent.ACTION_VIEW)
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                    uri = FileProvider.getUriForFile(
                        reactApplicationContext,
                        "${reactApplicationContext.packageName}.provider", // El authorities del FileProvider
                        file
                    )
                    intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                } else {
                    uri = Uri.fromFile(file)
                }
                intent.setDataAndType(uri, "application/vnd.android.package-archive")
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                Log.d("InstallerModule", "Starting APK install Intent...")
                reactApplicationContext.startActivity(intent)
                Log.d("InstallerModule", "Intent sent to start APK installation.")
                promise.resolve("APK installation started")
            } else {
                promise.reject("File not found", "The APK file does not exist at the specified path.")
            }
        } catch (e: Exception) {
            promise.reject("INSTALL_ERROR", "Error while trying to install APK: ${e.message}")
        }
    }
}
