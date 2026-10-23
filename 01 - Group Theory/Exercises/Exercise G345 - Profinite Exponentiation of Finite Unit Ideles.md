---
title: 'Exercise G345: Profinite Exponentiation of Finite Unit Ideles'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 3, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-3
created: '2026-10-23'
---

# Exercise G345: Profinite Exponentiation of Finite Unit Ideles

## Problem Statement

> [!question] Neukirch VI.1.3
> Write $I_K^1=I_f^1\times I_\infty^1$, with $I_f^1=\prod_{\mathfrak p\nmid\infty}U_{\mathfrak p}$, $I_\infty^1=\prod_{\mathfrak p\mid\infty}U_{\mathfrak p}$. Show that taking integer powers of idèles $\alpha\in I_f^1$ extends by continuity to exponentiation $\alpha^x$ with $x\in\widehat{\mathbb Z}$.

## Hints

> [!hint]- Hint 1 — first step
> First define the requested exponent in one finite quotient of the compact finite-unit group.

> [!hint]- Hint 2 — proof route
> Every finite quotient has a finite exponent. Pass to the inverse limit of the maps on these finite quotients.

## Solution

> [!success]- Independent derivation
> Each $U_v=\mathcal O_v^\times$ is the inverse limit of the finite groups $U_v/(1+\mathfrak p_v^r)$, so $I_f^1$ is profinite. For any open normal subgroup $N$, let $d_N$ be the order of $\alpha N$ in the finite quotient. Define
> $$
> \alpha^xN=(\alpha N)^{\,x\bmod d_N}.
> $$
> If $N'\subseteq N$, these elements have the same projection, so they define a unique $\alpha^x\in\varprojlim_N I_f^1/N=I_f^1$. Each finite quotient coordinate depends only on a finite congruence class of $x$, making the map continuous. On the integers it is ordinary exponentiation. Since the integers are dense in $\widehat{\mathbb Z}$, the continuous extension is unique. Checking in each finite quotient gives $\alpha^{x+y}=\alpha^x\alpha^y$ and $(\alpha^x)^y=\alpha^{xy}$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original pages rendered at 200 dpi. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 3, printed p. 367, PDF p. 386]. The solution is independently derived in this vault; citing an input does not mean that the book solves this exercise.
