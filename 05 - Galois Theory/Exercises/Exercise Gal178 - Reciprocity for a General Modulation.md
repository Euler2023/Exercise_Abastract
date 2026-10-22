---
title: 'Exercise Gal178: Reciprocity for a General Modulation'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 18, printed p. 309, PDF p. 328
source_refs:
- S4/ch-IV/sec-6/ex-18
created: '2026-10-23'
---

# Exercise Gal178: Reciprocity for a General Modulation

## Problem Statement

> [!question] Neukirch IV.6.18
> Assume that for every unramified map $f:X\to Y$ of connected finite $G$-sets, the sequence
> $$
> 0\longrightarrow U(Y)\xrightarrow{f^*}U(X)\xrightarrow{\varphi_{X|Y}^*-1}U(X)\xrightarrow{f_*}U(Y)\longrightarrow0
> $$
> is exact, and that $A(Y)^{[X:Y]}\subset f_*A(X)$ for every Galois mapping $f:X\to Y$ (the latter is a consequence of the condition which will be imposed in exercise 19). Then the pair $(d,v)$ gives, for every Galois mapping $f:X\to Y$, a canonical “reciprocity homomorphism”
> $$
> r_{X|Y}:G(X|Y)\longrightarrow A(Y)/f_*A(X).
> $$

## Hints

> [!hint]- Hint 1
> Unit exactness 与 $v(A)=Z$ 先推出 unramified Galois descent；一般 ramified descent 并非假设。

> [!hint]- Hint 2
> 在 $L$ 的 unramified tower 上用 injective restrictions 取 colimit，选 Frobenius lift $s$，令 $E$ 为其不动对象。定义 $r(s)=N_{E/K}\pi_E$。

> [!hint]- Hint 3
> 移植正文5.4的 coinvariant 计算：最后的 $z^{[M:K]}$ 只须属于 $N_{M/K}A(M)$，恰是本题另加的条件。

## Solution

> [!success]- Independent derivation
> 用源书 field-like notation 记 connected objects 为 $K,L,E$，$N$ 为 covariant map，restriction 为拉回。以下所有写成包含的 $A(E)\subset A(M)$ 都只沿 unramified maps；没有假定一般 descent。模块写乘法。
>
> **1. Unramified descent.** 若 $M/E$ unramified，restriction 在 valuation 上为恒等。若 $a\in A(E)$ 拉回为 $1$，则 $v(a)=0$，所以 $a\in U(E)$，unit exactness 给 $a=1$。若 $b\in A(M)^{G(M/E)}$，选 $a\in A(E)$ 使 $v(a)=v(b)$（每处像均为 $Z$）；$b/a\in U(M)$ 且不动，unit exactness 使其来自 $U(E)$。故 $A(E)\simeq A(M)^{G(M/E)}$。Mackey 方块于是把 unramified norm 识别为循环作用之和。
>
> **2. Tower 与定义。** 给有限 Galois $L/K$，令 $\widetilde K$ 为 $d_K$ 定义的 unramified tower，$\widetilde L=L\widetilde K$。沿 $M/L$ unramified 的 restriction 取并 $A_{\widetilde L}$，并类似定义 $A_{\widetilde K}$。Mackey 方块定义相容的 $N=N_{\widetilde L/\widetilde K}$。记 $H=G(\widetilde L/\widetilde K)$，选 $\phi\in G(\widetilde L/K)$ 满足 $d_K(\phi)=1$。若 $s$ 的 $d_K(s)=n>0$，其闭循环子群在 $\widetilde L$ 的不动对象 $E$ 为有限 degree，$\widetilde L/E$ unramified。选 $\pi_E\in A(E)$，$v_E(\pi_E)=1$，定义 $R(s)=N_{E/K}(\pi_E)$ 模所有 finite-level norms。
>
> Prime 的选择无关：两者比为 $u\in U(E)$，对任意有限 Galois $M/K\subset\widetilde L$，共同 refinement 可取含 $E$，此时 $M/E$ unramified，unit norm 满射，故 $N_{E/K}u\in N_{M/K}A(M)$。
>
> **3. 两个 norm calculations。** 记 $\phi_n=1+\phi+\cdots+\phi^{n-1}$。若 $E$ 为 $s$ 的不动对象且 $d_K(s)=n$，Mackey base change 对 $E\widetilde K=\widetilde L$ 给
> $$
> N_{E/K}a=N(a^{\phi_n})=N(a)^{\phi_n}.
> $$
> 原因是 $E^0=E\cap\widetilde K$ 的 degree 为 $n$，$N_{E^0/K}$ 为 $\phi_n$，而 $N_{E/E^0}$ base change 后为 $N$。
>
> 下面证明关键 unit calculation。若 $u\in U_{\widetilde L}$ 的 $H$-coinvariant class 被 $\phi$ 固定，则有有限关系
> $$
> u^{\phi-1}=\prod_i u_i^{\tau_i-1},\qquad \tau_i\in H.
> $$
> 选 finite Galois $M/K\subset\widetilde L$ 含所有 $u,u_i$ 并含 $L$；置 $n=[M:K]$、$s=\phi^n$。$s$ 固定 $M$，令 $E$ 为 $s$ 的不动对象，$E_n/E$ 为 degree $n$ 的 unramified extension。Unit norm 满射给 $\widetilde u,\widetilde u_i\in U(E_n)$，满足 $\widetilde u^{s_n}=u$、$\widetilde u_i^{s_n}=u_i$。因为 $n=[M:K]$ 且 $L\subset M$，$s=\phi^n$ 在 $L$ 上恒等；每个 $\tau_i\in H$ 在 $\widetilde K$ 上恒等，所以 $s$ 与 $\tau_i$ 在生成 $\widetilde L=L\widetilde K$ 的两部分上都交换。因此 $s$ centralizes $H$，$E,E_n$ 均被 $H$ 保持，norm $s_n$ 与每个 $\tau_i$ 交换。由关系，两边 lift 的差之 norm 为 $1$，unit exactness 给
> $$
> \widetilde u^{\phi-1}=y^{s-1}\prod_i\widetilde u_i^{\tau_i-1}
> =(y^{\phi_n})^{\phi-1}\prod_i\widetilde u_i^{\tau_i-1}.
> $$
> 作用 $N$ 后各 augmentation 因子消失，故 $N(\widetilde u)=N(y^{\phi_n})z$，其中 $z\in U_{\widetilde K}$ 被 $\phi$ 固定，因第1步 $z\in U(K)$。再作用 $s_n$，并置 $y_0=y^{s_n}\in U(E)$，得到
> $$
> N(u)=N(y_0^{\phi_n})z^n=N_{E/K}(y_0)z^n\in N_{M/K}A(M).
> $$
> 首项因 $E\supset M$ 为 norm；末项由本题 $A(K)^n\subset N_{M/K}A(M)$。这里正是一般 modulation 不能偷换为 module norm 的位置。遍历 $M$ 得到所需 universal-norm congruence。
>
> **4. 乘法性。** 若 $s_1s_2=s_3$，记 $n_i=d_K(s_i)$、$\tau_i=s_i^{-1}\phi^{n_i}$。把 $s_1$ 共轭为 $s_4=\phi^{-n_2}s_1\phi^{n_2}$，相应 $\pi_4=\pi_1^{\phi^{n_2}}$，则 $\tau_3=\tau_2\tau_4$ 且 $N_{E_4/K}\pi_4=N_{E_1/K}\pi_1$。令
> $$
> u=\pi_3^{\phi_{n_3}}\pi_4^{-\phi_{n_4}}\pi_2^{-\phi_{n_2}}.
> $$
> 因 $n_3=n_2+n_4$，$v(u)=0$。又
> $$
> u^{\phi-1}=\pi_3^{\tau_3-1}\pi_4^{1-\tau_4}\pi_2^{1-\tau_2}.
> $$
> 写 $\pi_3=u_3\pi_4$、$\pi_2=u_2^{-1}\pi_4$、$\pi_4^{\tau_2}=u_4\pi_4$；三个 $u_i$ 都为 units。由 $(\tau_3-1)+(1-\tau_2)+(1-\tau_4)=(1-\tau_2)(1-\tau_4)$ 得 $u^{\phi-1}=\prod_{i=2}^4u_i^{\tau_i-1}$。第3步使 $N(u)$ 为 universal norm，第一条 norm calculation 遂给 $R(s_1s_2)=R(s_1)R(s_2)$。
>
> **5. 降到有限 quotient。** 每个 $\sigma\in G(L/K)$ 都有 positive-integral-degree Frobenius lift $s$：在与其 finite unramified restriction 相容的整数类中取正整数。若两个 lifts degree 相同，则它们在 $L$ 与 $\widetilde K$ 上相同，所以相同；若 degree 不同，较大者为较小者乘一个在 $L$ 上恒等的 positive lift $t$，其不动对象包含 $L$，所以 $R(t)\in N_{L/K}A(L)$。乘法性使 $R(s)$ 模 $N_{L/K}A(L)$ 与 lift 无关，并给同态 $r_{L/K}$。公式是所有 choices 无关的，故 canonical。上面的 tower proof 是正文 [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, IV.§5, (5.3)–(5.6), printed pp.292–295, PDF pp.311–314] 的逐步 Mackey 改写；其中 norm calculations 的原页已实际图核。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Unramified Towers and Frobenius]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Cyclic Exact Sequences]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 18, printed p.309, PDF p.328]. 独立改写正文 Frobenius norm construction；unit exactness 只推出 unramified descent。
- **Hypotheses:** 这里的 $v$ 是前题定义的 henselian modulation valuation，并使用 Exercise15经校准的 $e/f$ 方向。
