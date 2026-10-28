---
title: "Exercise MF50: Modularity of the Function j of N Tau"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.5, Exercise 7.5.2, printed p. 289, PDF p. 302"
source_refs:
  - "S7/ch-7/sec-5/ex-2"
created: 2026-10-28
---

# Exercise MF50: Modularity of the Function j of N Tau

## Problem Statement

> [!question] Original Exercise 7.5.2
> What modifications to Exercise 1.2.11 show that $j_N\in\mathbb C(X_0(N))$?

> **Context and notation.** Here $j_N(\tau)=j(N\tau)$ and $\mathbb C(X_0(N))$ is the field of meromorphic $\Gamma_0(N)$-invariant functions on $\mathcal H$ meromorphic at all cusps. The source definition is on printed p. 283 / PDF p. 296.

## Hints

> [!hint]- Hint 1
> Conjugate $\Gamma_0(N)$ by $\operatorname{diag}(N,1)$.

> [!hint]- Hint 2
> At a cusp use a rational upper-triangular factor and the Laurent series of $j$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Put $\alpha=\begin{pmatrix}N&0\\0&1\end{pmatrix}$, so $j_N(\tau)=j(\alpha\tau)=j(N\tau)$. If $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_0(N)$, then
> $$
> \alpha\gamma\alpha^{-1}
> =\begin{pmatrix}a&Nb\\c/N&d\end{pmatrix}\in SL_2(\mathbb Z).
> $$
> Consequently $j_N(\gamma\tau)=j(\alpha\gamma\alpha^{-1}\alpha\tau)=j_N(\tau)$. The function is meromorphic on $\mathcal H$ because it is a composition of the meromorphic $j$ with $\tau\mapsto N\tau$.
>
> For a cusp represented by $\delta\in SL_2(\mathbb Z)$, factor $\alpha\delta=\eta B$ with $\eta\in SL_2(\mathbb Z)$ and $B$ upper triangular over $\mathbb Q$ of positive determinant. To obtain the factorization, choose $\eta$ taking $\infty$ to the rational cusp $\alpha\delta\infty$; then $\eta^{-1}\alpha\delta$ fixes infinity and is upper triangular. It acts as $B\tau=\lambda\tau+\mu$ with $\lambda>0$ rational and $\mu$ rational. Thus
> $$
> j_N(\delta\tau)=j(\lambda\tau+\mu).
> $$
> The Laurent expansion $j(z)=q_z^{-1}+744+\sum_{n\ge1}c_nq_z^n$ turns this into a convergent Laurent series in $e^{2\pi i\tau/w}$ after choosing a positive integer $w$ with $w\lambda\in\mathbb Z$. It has only finitely many negative powers. One may enlarge $w$ to a multiple of the cusp width. Since the function is periodic by that actual width, its Laurent series descends to that cusp coordinate (invariance removes the nonintegral exponents). Therefore it is meromorphic at every cusp.
>
> These are exactly the weight-zero modifications of the rational slash-operator and cusp argument in Exercise 1.2.11, proving membership in the modular function field.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Modular Curves and Moduli|Modular Curves and Moduli]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 289 / PDF p. 302. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Imported input:** The modularity and meromorphic cusp expansion of $j$ are source results from Chapter 1. No holomorphy at a cusp is asserted for $j_N$; poles are allowed.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
