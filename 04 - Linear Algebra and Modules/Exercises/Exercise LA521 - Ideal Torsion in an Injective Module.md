---
title: "Exercise LA521: Ideal Torsion in an Injective Module"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 25, printed p. 831, PDF p. 846"
created: 2026-09-29
---

# Exercise LA521: Ideal Torsion in an Injective Module

## Problem Statement

> [!question] Lang XX.25
> Do this exercise after reading about Noetherian rings. Let $A$ be a Noetherian commutative ring, $Q$ an injective $A$-module, and $\mathfrak a$ an ideal. Let $Q^{(\mathfrak a)}$ consist of those $x\in Q$ for which $\mathfrak a^nx=0$ for some $n$ depending on $x$. Show that $Q^{(\mathfrak a)}$ is injective.
>
> **Source hint:** Use Exercise 23.

## Hints

> [!hint]- Hint 1
> A map from a finitely generated ideal into $Q^{(\mathfrak a)}$ is killed by one common power of $\mathfrak a$.

> [!hint]- Hint 2
> Find $m$ for which $J\cap\mathfrak a^m$ is contained in that power times $J$.

## Solution

> [!success]- Independent derivation
> The union $Q^{(\mathfrak a)}=\bigcup_n\operatorname{Ann}_Q(\mathfrak a^n)$ is a submodule, since the annihilator submodules increase. By Baer's criterion take an ideal $J\subseteq A$ and $f:J\to Q^{(\mathfrak a)}$. Noetherianity gives finitely many generators of $J$; taking the maximum of exponents killing their images gives $k$ with $\mathfrak a^kf(J)=0$.
>
> We prove the needed intersection lemma rather than assume it. The Rees ring
> $$
> \mathcal R=\bigoplus_{n\ge0}\mathfrak a^nt^n
> $$
> is a finitely generated $A$-algebra (use finitely many generators of $\mathfrak a$), hence Noetherian by the Hilbert basis theorem. Its homogeneous ideal $\bigoplus_{n\ge0}(J\cap\mathfrak a^n)t^n$ has finitely many homogeneous generators, all of degrees at most some $c$. In degree $c+k$, their coefficients lie in $\mathfrak a^{c+k-d}\subseteq\mathfrak a^k$ for $d\le c$. Thus
> $$
> J\cap\mathfrak a^{c+k}\subseteq\mathfrak a^kJ.
> $$
> Every element of this intersection is killed by $f$. Therefore
> $$
> h:J+\mathfrak a^{c+k}\to Q,\qquad h(j+b)=f(j)
> $$
> is well defined and linear. Injectivity of $Q$ extends $h$ to $H:A\to Q$. Put $y=H(1)$. Because $H$ is zero on $\mathfrak a^{c+k}$, we have $\mathfrak a^{c+k}y=0$, so $y\in Q^{(\mathfrak a)}$. The map $a\mapsto ay$ is consequently an extension $A\to Q^{(\mathfrak a)}$ of $f$. Baer's criterion finishes the proof.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion]]
- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 25, printed p. 831, PDF p. 846]. The original page image was checked; the solution above is an independent derivation.
- **Named input:** Hilbert's basis theorem (a finitely generated commutative algebra over a Noetherian ring is Noetherian). The special Artin–Rees intersection estimate required here is proved explicitly above.
