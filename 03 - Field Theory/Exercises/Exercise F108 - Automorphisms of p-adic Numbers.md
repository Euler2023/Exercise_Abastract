---
title: "Exercise F108: Automorphisms of p-adic Numbers"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - p-adic-numbers
  - field-automorphisms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 3, printed p. 496, PDF p. 511"
created: 2026-09-25
---

# Exercise F108: Automorphisms of p-adic Numbers

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 3
> Show that the $p$-adic numbers $\mathbb Q_p$ have no field automorphisms other than the identity. The printed hint asks one to prove that every such automorphism is continuous for the $p$-adic topology, using Corollary 7.5 to characterize algebraically elements close to $1$.

## Hints

> [!hint]- Hint 1: Use the prime field
> Every field automorphism of $\mathbb Q_p$ fixes $\mathbb Q$ pointwise. Continuity would therefore finish the proof.

> [!hint]- Hint 2: Recognize the valuation ring algebraically
> For odd $p$, test whether $1+px^2$ is a square. For $p=2$, use $1+8x^2$ instead.

> [!hint]- Hint 3: Separate the negative valuations
> A square has even valuation. In the exceptional $2$-adic case $v_2(x)=-1$, reduce $1+8x^2$ modulo $8$.

## Solution

> [!success]- Solution
> Let $v_p$ be normalized by $v_p(p)=1$, and let $\mathbb Z_p=\{x:v_p(x)\ge0\}$. We show that $\mathbb Z_p$ can be described using only the field operations and the rational constant $p$.
>
> Suppose first that $p$ is odd. If $x\in\mathbb Z_p$, the polynomial $F(T)=T^2-(1+px^2)$ satisfies $|F(1)|_p\le p^{-1}<|F'(1)|_p^2=1$. Lang's Proposition 7.6 therefore gives a root in $\mathbb Q_p$. If $v_p(x)<0$, then $v_p(1+px^2)=1+2v_p(x)$ is odd, so $1+px^2$ cannot be a square. Hence
>
> $$
> x\in\mathbb Z_p\quad\Longleftrightarrow\quad
> 1+px^2\text{ is a square in }\mathbb Q_p
> \qquad(p\ne2).
> $$
>
> For $p=2$, if $x\in\mathbb Z_2$, the same polynomial with $8x^2$ in place of $px^2$ has $|F(1)|_2\le2^{-3}<|F'(1)|_2^2=2^{-2}$, and so $1+8x^2$ is a square. If $v_2(x)\le-2$, the valuation $v_2(1+8x^2)=3+2v_2(x)$ is negative and odd. If $v_2(x)=-1$, write $x=u/2$ with $u\in\mathbb Z_2^\times$. Then $1+8x^2=1+2u^2\equiv3\pmod8$, whereas every odd square is $1$ modulo $8$. Thus
>
> $$
> x\in\mathbb Z_2\quad\Longleftrightarrow\quad
> 1+8x^2\text{ is a square in }\mathbb Q_2.
> $$
>
> Let $\sigma$ be any field automorphism of $\mathbb Q_p$. It fixes the prime field $\mathbb Q$ and preserves squares, so the displayed algebraic characterizations give $\sigma(\mathbb Z_p)=\mathbb Z_p$. Since $\sigma(p)=p$, it follows that $\sigma(p^n\mathbb Z_p)=p^n\mathbb Z_p$ for every $n\ge0$. These ideals form a neighborhood basis of $0$, hence $\sigma$ is continuous.
>
> Finally, $\mathbb Q$ is dense in $\mathbb Q_p$ by the definition of completion. If rational numbers $q_n$ tend to $x$, then $\sigma(x)=\lim_n\sigma(q_n)=\lim_n q_n=x$. Therefore $\sigma$ is the identity.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source-contained input:** Lang's non-archimedean root criterion, Proposition 7.6 [S2, Ch. XII, §7, printed p. 493, PDF p. 508], is used with $F(T)=T^2-(1+cx^2)$ and initial value $1$. The printed hint cites Corollary 7.5; the stronger explicit criterion above handles $p=2$ directly.
- **Proof status:** The algebraic definition of $\mathbb Z_p$, continuity, and density argument are independently derived.
- **Source status:** The statement and its continuity hint were checked against [S2, Ch. XII, Exercise 3, printed p. 496, PDF p. 511].
