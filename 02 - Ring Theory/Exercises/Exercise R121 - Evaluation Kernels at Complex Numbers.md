---
title: "Exercise R121: Evaluation Kernels at Complex Numbers"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - evaluation-homomorphisms
  - minimal-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 3, Gauss's Lemma, Ex. 3.6, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R121: Evaluation Kernels at Complex Numbers

## Problem Statement

> [!question] Exercise 3.6
> Let $\alpha$ be a complex number. Prove that the kernel of the substitution map $\mathbb Z[x]\to\mathbb C$ that sends $x\mapsto\alpha$ is a principal ideal, and describe its generator.

## Hints

> [!hint]- Hint 1
> Separate the cases in which $\alpha$ is transcendental or algebraic over $\mathbb Q$.

> [!hint]- Hint 2
> In the algebraic case, clear denominators in the monic minimal polynomial and take its primitive integer associate.

## Solution

> [!success]- Solution
> Let
>
> $$
> \operatorname{ev}_{\alpha}:\mathbb Z[x]\longrightarrow\mathbb C,
> \qquad f\longmapsto f(\alpha).
> $$
>
> If $\alpha$ is transcendental over $\mathbb Q$, no nonzero polynomial in $\mathbb Q[x]$, and hence none in $\mathbb Z[x]$, vanishes at $\alpha$. Thus
>
> $$
> \ker(\operatorname{ev}_{\alpha})=(0).
> $$
>
> Now suppose $\alpha$ is algebraic over $\mathbb Q$. Let $\mu_\alpha\in\mathbb Q[x]$ be its monic minimal polynomial. Clear denominators and divide the integer coefficients by their gcd, choosing positive leading coefficient, to obtain the unique primitive integer polynomial $m_\alpha\in\mathbb Z[x]$ associated to $\mu_\alpha$ over $\mathbb Q[x]$.
>
> Clearly $m_\alpha(\alpha)=0$, so $(m_\alpha)$ is contained in the kernel. Conversely, if $f\in\mathbb Z[x]$ and $f(\alpha)=0$, the defining property of the minimal polynomial gives
>
> $$
> \mu_\alpha\mid f
> $$
>
> in $\mathbb Q[x]$. Hence the associate $m_\alpha$ also divides $f$ in $\mathbb Q[x]$. Since $m_\alpha$ is primitive, Gauss's lemma upgrades this to divisibility in $\mathbb Z[x]$. Therefore
>
> $$
> \ker(\operatorname{ev}_{\alpha})=(m_\alpha).
> $$
>
> So the generator is $0$ when $\alpha$ is transcendental, and otherwise it is the primitive integer associate of the minimal polynomial of $\alpha$ over $\mathbb Q$, determined up to sign.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

- **Routing:** Ring Theory is primary because the target is a kernel ideal of $\mathbb Z[x]$; field theory identifies its possible generator.
- **Boundary:** In the algebraic but non-integral case the primitive generator need not be monic.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.3, Ex. 3.6, printed p. 380, PDF p. 392]. The proof is independent.

