window.supabaseConfig = window.supabaseConfig || {
  url: "https://lirungizppgviqxwtzgm.supabase.co",
  anonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpcnVuZ2l6cHBndmlxeHd0emdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwOTcxMDMsImV4cCI6MjA3ODY3MzEwM30.jd27TcdjyHJiXVPPjO0mq2M9bediUz2PGhm2Q7SWOfM"
};

if (!window.supabaseConfig.url || !window.supabaseConfig.anonKey) {
  console.warn(
    "尚未配置 Supabase URL/anon key。复制 assets/config.example.js 并填写自己的信息。"
  );
}

