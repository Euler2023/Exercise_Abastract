---
title: "Exercise F147: Counting Points on a Quadratic Conic"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.3, Exercise 8.3.4, printed p. 332, PDF p. 345"
source_refs:
  - "S7/ch-8/sec-3/ex-4"
created: 2026-10-28
---

# Exercise F147: Counting Points on a Quadratic Conic

## Problem Statement

> [!question] Original Exercise 8.3.4
> Consider the affine curve $Q:x^2-dy^2=1$ with $d\in\mathbb Z-\{0\}$. For a prime $p\nmid2d$, define $a_p(Q)=p-|\widetilde Q(\mathbb F_p)|$. Show that
> $$
> t\longmapsto\left(\frac{1+dt^2}{1-dt^2},\frac{2t}{1-dt^2}\right),\quad
> \infty\longmapsto(-1,0)
> $$
> and
> $$
> (x,y)\longmapsto\frac y{x+1},\quad(-1,0)\longmapsto\infty
> $$
> give a bijection between $\mathbb P^1(\mathbb F_p)-\{t:dt^2=1\}$ and $\widetilde Q(\mathbb F_p)$. Deduce that $a_p(Q)=(d/p)$, the Legendre symbol. The source notes that these values arise as a system of eigenvalues.

## Hints

> [!hint]- Hint 1
> Compute $x+1$ after the forward substitution.

> [!hint]- Hint 2
> Count which projective parameters are removed according to whether $d$ is a square.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> For a finite allowed $t$, subtracting $d$ times the square of the proposed $y$ from the square of the proposed $x$ gives
> $$
> \frac{(1+dt^2)^2-4dt^2}{(1-dt^2)^2}=1.
> $$
> Moreover $x+1=2/(1-dt^2)$, so the reverse formula returns $t$.
>
> Conversely if $(x,y)$ lies on the conic and $x=-1$, then $dy^2=0$ and $y=0$, yielding the exceptional point. Otherwise set $t=y/(x+1)$. The curve equation gives
> $$
> dt^2=\frac{x^2-1}{(x+1)^2}=\frac{x-1}{x+1},\qquad
> 1-dt^2=\frac2{x+1}\ne0.
> $$
> Substituting into the forward expressions returns $x,y$. Infinity and $(-1,0)$ correspond separately. This proves the bijection.
>
> There are $p+1$ projective parameters. The equation $dt^2=1$ has two solutions when $d$ is a nonzero square modulo $p$ and none when it is a nonsquare. Its number of solutions is $1+(d/p)$, because $(d^{-1}/p)=(d/p)$. Therefore
> $$
> |\widetilde Q(\mathbb F_p)|=p+1-\bigl(1+(d/p)\bigr)=p-(d/p),
> $$
> and $a_p(Q)=(d/p)$. This calculation proves the point count; the source's eigenvalue interpretation is additional modular-form context, not needed for the bijection.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 332 / PDF p. 345. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
