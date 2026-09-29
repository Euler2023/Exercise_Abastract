---
title: "Exercise LA476: Nonzero Divisors Act Injectively on Flat Modules"
topic: module-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - module-theory
  - flat-modules
  - torsion
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 7, printed p. 638, PDF p. 653"
created: 2026-09-29
---

# Exercise LA476: Nonzero Divisors Act Injectively on Flat Modules

## Problem Statement

> [!question] Lang, Chapter XVI, Exercise 7
> Let $F$ be a flat $R$-module, and let $a\in R$ be an element which is not a zero-divisor. Show that if $ax=0$ for some $x\in F$ then $x=0$.

Here $R$ is commutative, and the hypothesis on $a$ says that multiplication by $a$ on $R$ is injective.

## Hints

> [!hint]- Hint 1: Start with a map between copies of the ring
> The map $\mu_a:R\to R$, $r\mapsto ar$, is injective. Apply the defining injection criterion for flatness to this map.

> [!hint]- Hint 2: Identify the tensor product with the original module
> Under $F\otimes_R R\cong F$, $x\otimes r\mapsto rx$, the map $1_F\otimes\mu_a$ becomes multiplication by $a$ on $F$.

## Solution

> [!success]- Independent proof by tensoring a multiplication map
> Since $a$ is not a zero-divisor, the sequence
>
> $$
> 0\longrightarrow R\xrightarrow{\ \mu_a\ }R,
> \qquad \mu_a(r)=ar,
> $$
>
> is exact. Flatness of $F$ implies that
>
> $$
> 1_F\otimes\mu_a:F\otimes_R R\longrightarrow F\otimes_R R
> $$
>
> is injective. The map $\lambda:F\otimes_R R\to F$, $\lambda(x\otimes r)=rx$, is an isomorphism with inverse $x\mapsto x\otimes1$. The formulas respect the balancing relation and their composites are identities. Moreover,
>
> $$
> \lambda\bigl((1_F\otimes\mu_a)(x\otimes r)\bigr)
> =\lambda(x\otimes ar)=arx
> =a\lambda(x\otimes r).
> $$
>
> Therefore multiplication by $a$ on $F$ is conjugate by $\lambda$ to an injective map and is itself injective. Its kernel is zero, which gives $ax=0\Rightarrow x=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Flat and Faithfully Flat Modules|Flat and Faithfully Flat Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Torsion Modules|Torsion Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]

## Notes

- **Source and proof status:** [S2, Ch. XVI, Ex. 7, printed p. 638, PDF p. 653] was checked on the original page image. The proof is independent and uses the injection criterion F3 for flatness [S2, Ch. XVI, §3, printed p. 613, PDF p. 628].
- **Hypothesis boundary:** Over an integral domain every nonzero scalar satisfies the hypothesis, so flat modules are torsion-free. Over a ring with zero-divisors, being a nonzero scalar is insufficient: $R=\mathbb Z/4\mathbb Z$ is flat over itself, but $2\cdot2=0$ in $R$.
