---
title: 'Exercise LA576: Narrow Hilbert Degree of a Real Quadratic Field'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 2, printed p. 404, PDF p. 423
source_refs:
- S4/ch-VI/sec-6/ex-2
created: '2026-10-23'
---

# Exercise LA576: Narrow Hilbert Degree of a Real Quadratic Field

## Problem Statement

> [!question] Neukirch VI.6.2
> Let $d>0$ be squarefree, and $K=\mathbb Q(\sqrt d)$. Let $\epsilon$ be a totally positive fundamental unit of $K$. Then one has $[K^1:H]=1$ or $=2$, according as $N_{K|\mathbb Q}(\epsilon)=-1$ or $=1$.

> [!warning] Source issue / proof scope
> A totally positive unit has positive norm. The negative-norm alternative requires an unrestricted fundamental unit, as proved below.

## Hints

> [!hint]- Hint
> A totally positive unit cannot have negative norm. For the intended criterion take an unrestricted fundamental unit and list the signs of $\pm\epsilon^n$.

> [!hint]- Stronger hint
> A negative-norm fundamental unit supplies opposite signs; with -1 this gives all four sign pairs. A positive-norm generator supplies only two.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Source issue.** The original problem calls $\epsilon$ totally positive but distinguishes the cases of norm $\pm1$. A totally positive unit necessarily has norm $+1$. The corrected version takes a fundamental unit $\eta$, which may be chosen with $\eta>1$ at the first real embedding, without imposing positivity at the second real embedding.
> The units of a real quadratic field are $\{\pm\eta^n:n\in\mathbb Z\}$. If $N(\eta)=-1$, the signs of $\eta$ at the two real embeddings are opposite. Together with the signs $(-,-)$ of $-1$, they generate all four sign patterns. Thus $[E:E_+]=4$ and $t=2$. The preceding exercise gives $[K^1:H]=2^{2-2}=1$.
> If $N(\eta)=+1$, choosing $\eta>1$ also makes the other real embedding positive. The only unit sign patterns are then $(+,+)$ and $(-,-)$. Thus $[E:E_+]=2$ and $t=1$, giving $[K^1:H]=2$.
> If one insists on a totally positive fundamental unit, then whenever a negative-norm unit exists, that totally positive unit is the square of a generator of the free unit group. Its norm cannot directly distinguish the two cases.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Quadratic Units and Signs]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 2, printed p.404, PDF p.423]. The solution is an independent derivation, with external inputs distinguished from the deductions made here.
