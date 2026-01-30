import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import MathGame from './MathGame';

const Hero = () => {
  const [showMathGame, setShowMathGame] = useState(false);
  const [currentEquationIndex, setCurrentEquationIndex] = useState(0);
  
  const equations = [
    // Numerical Analysis & Linear Algebra
    { formula: "x̂ = F_N x, (F_N)_{kℓ} = e^(-2πikℓ/N)", description: "Discrete Fourier Transform" },
    { formula: "H_n = H_1^⊗n, H_1 = [[1,1],[1,-1]]", description: "Hadamard Transform" },
    { formula: "v_{k+1} = Av_k/||Av_k||", description: "Power Iteration Method" },
    { formula: "A = QR, Q^T Q = I, R upper-triangular", description: "QR Decomposition" },
    { formula: "A = UΣV^T, Σ = diag(σ₁,...)", description: "Singular Value Decomposition" },
    { formula: "x_{k+1} = x_k + α_k p_k, α_k = r_k^T r_k/(p_k^T A p_k)", description: "Conjugate Gradient Method" },
    { formula: "β̂ = (X^T X + λI)^(-1) X^T y", description: "Ridge Regression" },
    { formula: "(A+UCV)^(-1) = A^(-1) - A^(-1)U(C^(-1)+VA^(-1)U)^(-1)VA^(-1)", description: "Sherman-Morrison-Woodbury" },
    { formula: "Δλᵢ ≈ uᵢ^T(ΔA)uᵢ", description: "Eigenvalue Perturbation" },

    // Optimisation & Machine Learning
    { formula: "θₜ₊₁ = θₜ - η∇θℒ(θₜ)", description: "Gradient Descent" },
    { formula: "mₜ = β₁m_{t-1} + (1-β₁)gₜ, vₜ = β₂v_{t-1} + (1-β₂)gₜ²", description: "Adam Optimizer" },
    { formula: "∂ℒ/∂xᵢ = Σⱼ(∂ℒ/∂yⱼ)(∂yⱼ/∂xᵢ)", description: "Backpropagation Chain Rule" },
    { formula: "ℒ = -Σₖ yₖ log(softmax_k(z))", description: "Cross-Entropy Loss" },
    { formula: "ℒ = Σᵢ max(0, 1 - yᵢ(w^T xᵢ + b))", description: "Hinge Loss (SVM)" },
    { formula: "∇θℒ + Σⱼ λⱼ∇θgⱼ = 0, λⱼgⱼ = 0", description: "KKT Conditions" },
    { formula: "min_β ½||y - Xβ||² + λ||β||₁", description: "LASSO Regression" },
    { formula: "λ(α||β||₁ + (1-α)||β||₂²/2)", description: "Elastic Net Penalty" },
    { formula: "Q(θ|θ^(t)) = E_{Z|X,θ^(t)}[log p(X,Z|θ)]", description: "EM Algorithm E-step" },
    { formula: "Attn(Q,K,V) = softmax(QK^T/√d)V", description: "Transformer Attention" },
    { formula: "y = ℱ(x) + x", description: "Residual Connection" },
    { formula: "x̂ = (x-μ_B)/√(σ_B²+ε), y = γx̂ + β", description: "Batch Normalization" },
    { formula: "E[h̃] = p·h, p = Pr(unit kept)", description: "Dropout Regularization" },

    // Information Theory & Statistics
    { formula: "H(X) = -Σₓ p(x) log p(x)", description: "Shannon Entropy" },
    { formula: "D_{KL}(P||Q) = Σₓ p(x) log(p(x)/q(x))", description: "Kullback-Leibler Divergence" },
    { formula: "I(X;Y) = Σₓ,ᵧ p(x,y) log(p(x,y)/(p(x)p(y)))", description: "Mutual Information" },
    { formula: "H(P,Q) = H(P) + D_{KL}(P||Q)", description: "Cross Entropy" },
    { formula: "(ℐ(θ))ᵢⱼ = -E[∂²/∂θᵢ∂θⱼ log p(X;θ)]", description: "Fisher Information Matrix" },
    { formula: "Var(θ̂) ≥ ℐ(θ)^(-1)", description: "Cramér-Rao Lower Bound" },
    { formula: "E[X] = E_Y[E[X|Y]]", description: "Law of Total Expectation" },
    { formula: "(Σᵢ Xᵢ - nμ)/(σ√n) →^d N(0,1)", description: "Central Limit Theorem" },
    { formula: "β̂ = (X^T X)^(-1) X^T y minimizes Var(β̂)", description: "Gauss-Markov Theorem" },

    // Stochastic Processes & Control
    { formula: "df = (∂f/∂t)dt + (∂f/∂S)dS + ½(∂²f/∂S²)σ²S²dt", description: "Itô's Lemma" },
    { formula: "dSₜ = μSₜdt + σSₜdWₜ", description: "Geometric Brownian Motion" },
    { formula: "∂p/∂t = -∂/∂x(a(x)p) + ½∂²/∂x²(b(x)p)", description: "Fokker-Planck Equation" },
    { formula: "x̂_{k|k-1} = Ax̂_{k-1|k-1} + Bu_{k-1}", description: "Kalman Filter Prediction" },
    { formula: "αₜ₊₁(j) = [Σᵢ αₜ(i)aᵢⱼ]bⱼ(oₜ₊₁)", description: "Hidden Markov Model Forward" },
    { formula: "0 = inf_u{L(x,u) + ∇V·f(x,u)}", description: "Hamilton-Jacobi-Bellman" },
    { formula: "V^π(s) = E_π[rₜ₊₁ + γV^π(sₜ₊₁)|sₜ=s]", description: "Bellman Equation" },
    { formula: "Qₜ₊₁(s,a) = Qₜ(s,a) + α[r + γmax_{a'}Qₜ(s',a') - Qₜ(s,a)]", description: "Q-Learning Update" },
    { formula: "f(t) = λe^(-λt)", description: "Exponential Distribution" },
    { formula: "dXₜ = κ(θ-Xₜ)dt + σdWₜ", description: "Ornstein-Uhlenbeck Process" },

    // Algorithms & Complexity
    { formula: "T(n) = aT(n/b) + Θ(nᶜ) ⇒ T(n) = Θ(nᶜ log n)", description: "Master Theorem" },
    { formula: "π^T = π^T(αP + (1-α)1v^T)", description: "PageRank Algorithm" },
    { formula: "||P^t(x,·) - π||_{TV} ≤ (1-λ₂)^t", description: "Markov Chain Mixing" },
    { formula: "p ≈ (1-e^(-kn/m))^k", description: "Bloom Filter False Positive" },
    { formula: "E[collisions] = n²/2m", description: "Hash Table Collisions" },
    { formula: "C = B log₂(1 + S/N)", description: "Shannon Channel Capacity" },
    { formula: "fₛ ≥ 2f_{max}", description: "Nyquist Sampling Theorem" },

    // Finance & Econometrics
    { formula: "∂V/∂t + ½σ²S²∂²V/∂S² + rS∂V/∂S - rV = 0", description: "Black-Scholes Equation" },
    { formula: "C = S₀Φ(d₁) - Ke^(-rT)Φ(d₂)", description: "Black-Scholes Call Price" },
    { formula: "Δ = ∂V/∂S", description: "Option Delta" },
    { formula: "E[Rᵢ] = r_f + βᵢ(E[R_m] - r_f)", description: "Capital Asset Pricing Model" },
    { formula: "Rᵢ - r_f = α + β_M R_M + β_{SMB}SMB + β_{HML}HML + ε", description: "Fama-French Three-Factor" },
    { formula: "drₜ = κ(θ-rₜ)dt + σdWₜ", description: "Vasicek Interest Rate Model" },
    { formula: "drₜ = κ(θ-rₜ)dt + σ√rₜdWₜ", description: "Cox-Ingersoll-Ross Model" },
    { formula: "dSₜ = μSₜdt + √vₜSₜdWₜ^(1), dvₜ = κ(θ-vₜ)dt + σ√vₜdWₜ^(2)", description: "Heston Stochastic Volatility" },
    { formula: "σₜ² = ω + αεₜ₋₁² + βσₜ₋₁²", description: "GARCH(1,1) Model" },
    { formula: "yₜ = Hxₜ + ηₜ, xₜ₊₁ = Fxₜ + ξₜ", description: "State Space Model" },
    { formula: "min_w w^TΣw s.t. w^Tμ = μ*, w^T1 = 1", description: "Markowitz Portfolio" },
    { formula: "𝒮 = (E[R] - r_f)/σ_R", description: "Sharpe Ratio" },
    { formula: "f* = (p(b+1) - 1)/b", description: "Kelly Criterion" },
    { formula: "q(K) = e^(rT) ∂²C/∂K²", description: "Risk-Neutral Density" },
    { formula: "C - P = S₀ - Ke^(-rT)", description: "Put-Call Parity" },
    { formula: "dSₜ = Sₜ((μ-λk)dt + σdWₜ + dJₜ)", description: "Jump Diffusion Model" },
    { formula: "ES_α = -1/α ∫₀^α F^(-1)(u)du", description: "Expected Shortfall" },
    { formula: "φ(B)(1-B)^d Xₜ = θ(B)εₜ", description: "ARFIMA Model" },

    // Signal Processing & Dynamical Systems
    { formula: "(x*y)[n] = Σₖ x[k]y[n-k]", description: "Discrete Convolution" },
    { formula: "S_{xx}(f) = ℱ{R_{xx}(τ)}", description: "Power Spectral Density" },
    { formula: "X(z) = Σₙ x[n]z^(-n)", description: "Z-Transform" },
    { formula: "ẋ = Ax + Bu, y = Cx + Du", description: "State Space Representation" },
    { formula: "A^T P + PA = -Q, Q ≻ 0 ⇒ V = x^T Px decays", description: "Lyapunov Stability" },
    { formula: "xₙ₊₁ = rxₙ(1-xₙ)", description: "Logistic Map" },
    { formula: "ẋ = σ(y-x), ẏ = x(ρ-z)-y, ż = xy-βz", description: "Lorenz System" },
    { formula: "λ = lim_{t→∞} 1/t log(||δx(t)||/||δx(0)||)", description: "Lyapunov Exponent" },

    // PDEs & Physics
    { formula: "ρ(∂ₜu + u·∇u) = -∇p + μ∇²u, ∇·u = 0", description: "Navier-Stokes Equations" },
    { formula: "∂u/∂t = α∇²u", description: "Heat Equation" },
    { formula: "∂²u/∂t² = c²∇²u", description: "Wave Equation" },
    { formula: "∇²φ = -ρ/ε₀", description: "Poisson's Equation" },
    { formula: "∂ₜgᵢⱼ = -2Rᵢⱼ", description: "Ricci Flow" },
    { formula: "q̇ᵢ = ∂H/∂pᵢ, ṗᵢ = -∂H/∂qᵢ", description: "Hamilton's Equations" },
    { formula: "∇×E = -∂ₜB", description: "Faraday's Law" },
    { formula: "iℏ∂ₜψ = -ℏ²/2m ∇²ψ + Vψ", description: "Schrödinger Equation" },
    { formula: "1/c ∂I_ν/∂t + n·∇I_ν = η_ν - κ_ν I_ν", description: "Radiative Transfer" },
    { formula: "∂ₜc + u·∇c = D∇²c", description: "Advection-Diffusion" },
    { formula: "∂ₜu + u∂ₓu = ν∂ₓ²u", description: "Burgers' Equation" },
    { formula: "∂ₜφ = ∇²(φ³ - φ - γ∇²φ)", description: "Cahn-Hilliard Equation" },

    // Geometry, Graphics & Vision
    { formula: "I = I_a k_a + I_d k_d(L·N) + I_s k_s(R·V)^n", description: "Phong Lighting Model" },
    { formula: "[x',y',z',1]^T = P[x,y,z,1]^T", description: "3D Perspective Projection" },
    { formula: "x₂^T F x₁ = 0", description: "Fundamental Matrix" },
    { formula: "E = ∬[(I_x u + I_y v + I_t)² + α²(||∇u||² + ||∇v||²)]dxdy", description: "Horn-Schunck Optical Flow" },
    { formula: "(R*,t*) = argmin_{R,t} Σᵢ||Rpᵢ + t - qᵢ||²", description: "Procrustes Analysis" },
    { formula: "∂ₜφ = ||∇φ||κ", description: "Level Set Method" },

    // Cryptography & Security
    { formula: "ed ≡ 1 (mod φ(N))", description: "RSA Key Generation" },
    { formula: "K = g^(ab) mod p", description: "Diffie-Hellman Key Exchange" },
    { formula: "(x₃,y₃) = (λ² - x₁ - x₂, λ(x₁ - x₃) - y₁)", description: "Elliptic Curve Addition" },
    { formula: "P(M|C) = P(M)", description: "Perfect Secrecy" },

    // Graph Theory & Combinatorics
    { formula: "τ(G) = 1/n λ₂λ₃···λₙ", description: "Matrix-Tree Theorem" },
    { formula: "L = D - A, L1 = 0", description: "Graph Laplacian" },
    { formula: "p = log n/n for connectivity", description: "Erdős-Rényi Threshold" },
    { formula: "2h(G) ≥ λ₂ ≥ h(G)²/2", description: "Cheeger's Inequality" },

    // Miscellaneous Applied Gems
    { formula: "E[T] = n H_n ≈ n ln n", description: "Coupon Collector Expected Time" },
    { formula: "Σₙ P(Aₙ) < ∞ ⇒ P(Aₙ i.o.) = 0", description: "Borel-Cantelli Lemma" },
    { formula: "log Σᵢ e^(zᵢ) = z_max + log Σᵢ e^(zᵢ - z_max)", description: "Log-Sum-Exp Trick" },
    { formula: "σ(x) = log(1 + e^x)", description: "Softplus Activation" },
    { formula: "ReLU(x) = max(0,x)", description: "ReLU Activation" },
    { formula: "cos θ = (x·y)/(||x|| ||y||)", description: "Cosine Similarity" },
    { formula: "m ≥ 4ln n/(ε²/2 - ε³/3)", description: "Hoeffding Sample Bound" },
    { formula: "A⁺ = VΣ⁺U^T", description: "Moore-Penrose Pseudoinverse" },
    { formula: "d = 2R arcsin√(sin²(Δφ/2) + cos φ₁ cos φ₂ sin²(Δλ/2))", description: "Haversine Distance" },
    { formula: "σ(x) = 1/(1 + e^(-x))", description: "Sigmoid Activation" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEquationIndex((prev) => (prev + 1) % equations.length);
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-profile">
          <div className="profile-image">
            <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="Siddhant Sukhani" />
          </div>
        </div>
        
        <div className="hero-text">
          <h1 className="hero-title">Siddhant Sukhani</h1>
          <h2 className="hero-subtitle">Computational Mathematical Engineer</h2>
          
          <div className="math-formula">
            <span 
              className="clickable-equation"
              onClick={() => setShowMathGame(true)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && setShowMathGame(true)}
            >
              {equations[currentEquationIndex].formula}
            </span>
            <p className="formula-description">
              {equations[currentEquationIndex].description}
            </p>
          </div>
          
          <p className="hero-description">
            Georgia Tech senior studying Applied Mathematics and Computational Data Analysis. 
            Starting MS in Mathematical Computational Finance at Stanford Fall 2025.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="btn-primary">
              About
            </Link>
            <Link to="/research" className="btn-secondary">
              Research
            </Link>
            <Link to="/diving" className="btn-secondary">
              Diving
            </Link>
          </div>
        </div>
      </div>

      {showMathGame && (
        <MathGame onClose={() => setShowMathGame(false)} />
      )}
    </section>
  );
};

export default Hero; 