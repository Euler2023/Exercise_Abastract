---
title: "Exercise F85: Conjugacy of Irreducible Factors over a Normal Extension"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 26, printed p. 256, PDF p. 271"
created: 2026-09-06
---

# Exercise F85: Conjugacy of Irreducible Factors over a Normal Extension

## Problem Statement

> [!question] Lang, Chapter V, Exercise 26
> Let $k$ be a field, $f(X)$ an irreducible polynomial in $k[X]$, and let $K$ be a finite normal extension of $k$. If $g,h$ are monic irreducible factors of $f(X)$ in $K[X]$, show that there exists an automorphism $\sigma$ of $K$ over $k$ such that $g=h^\sigma$. Give an example when this conclusion is not valid if $K$ is not normal over $k$.

## Hints

> [!hint]- Hint 1
> Map a root of $h$ to a root of $g$ and extend that embedding.

> [!hint]- Hint 2
> Try $K=\mathbb Q(\sqrt[3]2)$ and $f=X^3-2$.

## Solution

> [!success]- Solution and proof status
> Choose an algebraic closure $\Omega$ containing $K$, a root $\alpha$ of $h$, and a root $\beta$ of $g$. Both are roots of the irreducible polynomial $f$, so the isomorphism
> $$
> k(\alpha)\longrightarrow k(\beta),\qquad\alpha\longmapsto\beta
> $$
> fixes $k$. Extend it to an automorphism $\tau$ of $\Omega$ using the extension theorem for algebraic closures. Normality of $K/k$ implies $\tau(K)=K$; put $\sigma=\tau|_K$.
>
> Applying $\tau$ to $h(\alpha)=0$ gives $h^\sigma(\beta)=0$. The polynomial $h^\sigma$ is monic and irreducible over $K$, because applying $\sigma^{-1}$ to a factorization would factor $h$. It is therefore the monic minimal polynomial of $\beta$ over $K$, namely $g$.
>
> For a counterexample put $\rho=\sqrt[3]2\in\mathbb R$ and $K=\mathbb Q(\rho)$. Then
> $$
> X^3-2=(X-\rho)(X^2+\rho X+\rho^2)
> $$
> in $K[X]$. The quadratic has nonreal roots $\rho\zeta_3,\rho\zeta_3^2$ and is irreducible over the real field $K$. No coefficient automorphism can send the linear factor to the quadratic, because it preserves degrees. This $K/\mathbb Q$ is not normal.

## Related Concepts

- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Imported inputs:** Extension of embeddings to algebraic closures [S2, Ch. V, Thm. 2.8, printed pp. 233–234, PDF pp. 248–249]; normality criterion [S2, Ch. V, Thm. 3.3, printed p. 237, PDF p. 252].
- **Method boundary:** Normality is required; separability is not. The argument works even when $f$ has repeated roots in its splitting field.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 26, printed p. 256, PDF p. 271]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
