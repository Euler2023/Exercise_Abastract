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
> is exact, and that $A(Y)^{[X:Y]}\subset f_*A(X)$ for every Galois mapping $f:X\to Y$ (the latter is a consequence of the condition which will be imposed in exercise 19). Then the pair $(d,v)$ gives, for every Galois mapping $f:X\to Y$, a canonical "reciprocity homomorphism"
> $$
> r_{X|Y}:G(X|Y)\longrightarrow A(Y)/f_*A(X).
> $$

## Hints

> [!hint]- Hint 1
> Unit exactness together with $v(A)=Z$ first gives unramified Galois descent. General ramified descent is not assumed.

> [!hint]- Hint 2
> Form the colimit using injective restrictions in the unramified tower of $L$. Choose a Frobenius lift $s$ and let $E$ be its fixed object. Define $r(s)=N_{E/K}\pi_E$.

> [!hint]- Hint 3
> Adapt the coinvariant calculation in §5.4 of the text. Its final $z^{[M:K]}$ need only belong to $N_{M/K}A(M)$, which is exactly the additional hypothesis in this exercise.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Use the source's field-like notation: connected objects are denoted by $K,L,E$, $N$ is the covariant map, and restriction is pullback. Every inclusion $A(E)\subset A(M)$ below is along an unramified map; general descent is not assumed. Write modules multiplicatively.
>
> **1. Unramified descent.** If $M/E$ is unramified, restriction acts identically on valuations. If $a\in A(E)$ pulls back to $1$, then $v(a)=0$, so $a\in U(E)$; unit exactness gives $a=1$. If $b\in A(M)^{G(M/E)}$, choose $a\in A(E)$ with $v(a)=v(b)$, since the image at every object is $Z$. The element $b/a\in U(M)$ is fixed, so unit exactness makes it come from $U(E)$. Thus $A(E)\simeq A(M)^{G(M/E)}$. The Mackey square then identifies the unramified norm with the sum of the cyclic action.
>
> **2. The tower and the definition.** For finite Galois $L/K$, let $\widetilde K$ be the unramified tower defined by $d_K$, and put $\widetilde L=L\widetilde K$. Take the union $A_{\widetilde L}$ under restriction along the unramified maps $M/L$, and define $A_{\widetilde K}$ similarly. Mackey squares define compatible maps $N=N_{\widetilde L/\widetilde K}$. Write $H=G(\widetilde L/\widetilde K)$ and choose $\phi\in G(\widetilde L/K)$ with $d_K(\phi)=1$. If $s$ has $d_K(s)=n>0$, the fixed object $E$ of its closed cyclic subgroup in $\widetilde L$ has finite degree, and $\widetilde L/E$ is unramified. Choose $\pi_E\in A(E)$ and $v_E(\pi_E)=1$, and define $R(s)=N_{E/K}(\pi_E)$ modulo all finite-level norms.
>
> The choice of prime element is immaterial. The ratio of two choices lies in $u\in U(E)$. For any finite Galois $M/K\subset\widetilde L$, a common refinement can be chosen to contain $E$. Then $M/E$ is unramified and its unit norm is surjective, giving $N_{E/K}u\in N_{M/K}A(M)$.
>
> **3. Two norm calculations.** Write $\phi_n=1+\phi+\cdots+\phi^{n-1}$. If $E$ is the fixed object of $s$ and $d_K(s)=n$, Mackey base change for $E\widetilde K=\widetilde L$ gives
> $$
> N_{E/K}a=N(a^{\phi_n})=N(a)^{\phi_n}.
> $$
> Indeed, $E^0=E\cap\widetilde K$ has degree $n$, $N_{E^0/K}$ is $\phi_n$, and the base change of $N_{E/E^0}$ is $N$.
>
> We next prove the key unit calculation. If the $H$-coinvariant class of $u\in U_{\widetilde L}$ is fixed by $\phi$, there is a finite relation
> $$
> u^{\phi-1}=\prod_i u_i^{\tau_i-1},\qquad \tau_i\in H.
> $$
> Choose finite Galois $M/K\subset\widetilde L$ containing all $u,u_i$ and containing $L$, and put $n=[M:K]$ and $s=\phi^n$. The element $s$ fixes $M$. Let $E$ be the fixed object of $s$, and let $E_n/E$ be the unramified extension of degree $n$. Surjectivity of the unit norm gives $\widetilde u,\widetilde u_i\in U(E_n)$ satisfying $\widetilde u^{s_n}=u$ and $\widetilde u_i^{s_n}=u_i$. Since $n=[M:K]$ and $L\subset M$, $s=\phi^n$ acts identically on $L$. Each $\tau_i\in H$ acts identically on $\widetilde K$, so $s$ and $\tau_i$ commute on both parts generating $\widetilde L=L\widetilde K$. Thus $s$ centralizes $H$, the groups $E,E_n$ are preserved by $H$, and the norm $s_n$ commutes with every $\tau_i$. The relation says that the norm of the discrepancy between the two lifts is $1$. Unit exactness gives
> $$
> \widetilde u^{\phi-1}=y^{s-1}\prod_i\widetilde u_i^{\tau_i-1}
> =(y^{\phi_n})^{\phi-1}\prod_i\widetilde u_i^{\tau_i-1}.
> $$
> After applying $N$, all augmentation factors disappear. Hence $N(\widetilde u)=N(y^{\phi_n})z$, where $z\in U_{\widetilde K}$ is fixed by $\phi$ and, by Step 1, $z\in U(K)$. Apply $s_n$ and put $y_0=y^{s_n}\in U(E)$ to obtain
> $$
> N(u)=N(y_0^{\phi_n})z^n=N_{E/K}(y_0)z^n\in N_{M/K}A(M).
> $$
> The first term is a norm because $E\supset M$. For the final term, use the hypothesis $A(K)^n\subset N_{M/K}A(M)$. This is exactly where a general modulation must not be replaced silently by a module norm. Varying $M$ gives the required universal-norm congruence.
>
> **4. Multiplicativity.** If $s_1s_2=s_3$, write $n_i=d_K(s_i)$ and $\tau_i=s_i^{-1}\phi^{n_i}$. Conjugate $s_1$ to $s_4=\phi^{-n_2}s_1\phi^{n_2}$, with the corresponding $\pi_4=\pi_1^{\phi^{n_2}}$. Then $\tau_3=\tau_2\tau_4$ and $N_{E_4/K}\pi_4=N_{E_1/K}\pi_1$. Put
> $$
> u=\pi_3^{\phi_{n_3}}\pi_4^{-\phi_{n_4}}\pi_2^{-\phi_{n_2}}.
> $$
> Since $n_3=n_2+n_4$, we have $v(u)=0$. Also,
> $$
> u^{\phi-1}=\pi_3^{\tau_3-1}\pi_4^{1-\tau_4}\pi_2^{1-\tau_2}.
> $$
> Write $\pi_3=u_3\pi_4$, $\pi_2=u_2^{-1}\pi_4$, and $\pi_4^{\tau_2}=u_4\pi_4$. All three $u_i$ are units. The identity $(\tau_3-1)+(1-\tau_2)+(1-\tau_4)=(1-\tau_2)(1-\tau_4)$ gives $u^{\phi-1}=\prod_{i=2}^4u_i^{\tau_i-1}$. Step 3 makes $N(u)$ a universal norm, and the first norm calculation then yields $R(s_1s_2)=R(s_1)R(s_2)$.
>
> **5. Descent to the finite quotient.** Every $\sigma\in G(L/K)$ has a Frobenius lift $s$ of positive integral degree: choose a positive integer in the congruence class compatible with its finite unramified restriction. Two lifts of the same degree agree on $L$ and $\widetilde K$ and hence are equal. If the degrees differ, the lift of larger degree is the smaller one multiplied by a positive lift $t$ acting identically on $L$. Its fixed object contains $L$, so $R(t)\in N_{L/K}A(L)$. Multiplicativity makes $R(s)$ modulo $N_{L/K}A(L)$ independent of the lift and gives the homomorphism $r_{L/K}$. The formula is independent of all choices and is therefore canonical. This tower proof is a step-by-step Mackey reformulation of [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, IV.§5, (5.3)–(5.6), printed pp.292–295, PDF pp.311–314]; the original pages for the norm calculations were inspected as rendered images.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Unramified Towers and Frobenius]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Cyclic Exact Sequences]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 18, printed p.309, PDF p.328]. An independent reformulation of the Frobenius norm construction in the text. Unit exactness gives only unramified descent.
- **Hypotheses:** Here $v$ is the henselian modulation valuation defined in the preceding exercise, and the corrected $e/f$ direction of Exercise 15 is used.
