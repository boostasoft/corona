package com.corona;
import android.content.res.Configuration;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

import androidx.annotation.NonNull;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;

public class MainActivity extends ReactActivity  {

  static String currentLocale;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
    MainActivity.currentLocale = getResources().getConfiguration().locale.toString();
  }

  @Override
  public void onConfigurationChanged(@NonNull Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    String locale = newConfig.locale.toString();
    if (!MainActivity.currentLocale.equals(locale)) {
      MainActivity.currentLocale = locale;
      final ReactInstanceManager instanceManager = getReactInstanceManager();
      instanceManager.recreateReactContextInBackground();
    }
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "COVID Alert";
  }
}
