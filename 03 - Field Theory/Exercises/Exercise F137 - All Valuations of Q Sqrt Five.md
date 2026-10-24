---
title: 'Exercise F137: All Valuations of Q Sqrt Five'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 1, printed pp. 165–166, PDF pp. 184–185
source_refs:
- S4/ch-II/sec-8/ex-1
created: '2026-10-23'
---

# Exercise F137: All Valuations of Q Sqrt Five

## Problem Statement

> [!question] Neukirch II.8.1
> Up to equivalence, the valuations of $\mathbb Q(\sqrt5)$ are as follows.
>
> 1) $|a+b\sqrt5|_1=|a+b\sqrt5|$ and $|a+b\sqrt5|_2=|a-b\sqrt5|$ are the archimedean valuations.
>
> 2) If $p=2$ or $5$, or $p\ne2,5$ and $\left(\frac p5\right)=-1$, there is exactly one extension of $|\ | _p$, namely $|a+b\sqrt5|_p=|a^2-5b^2|_p^{1/2}$.
>
> 3) If $p\ne2,5$ and $\left(\frac p5\right)=1$, there are two extensions, $|a+b\sqrt5|_{p_1}=|a+b\gamma|_p$ and $|a+b\sqrt5|_{p_2}=|a-b\gamma|_p$, where $\gamma^2=5$ in $\mathbb Q_p$.

## Hints

> [!hint]- Hint 1
> Use the two real embeddings for the archimedean case, and factor a minimal polynomial over each completion.

> [!hint]- Hint 2
> At 2 use the integral generator $(1+\sqrt5)/2$, whose polynomial is $X^2-X-1$; at 5 use Eisenstein.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Every nontrivial valuation of this algebraic extension restricts nontrivially to $\mathbb Q$: an algebraic element over a trivially valued field must have value one, by the largest-term argument in its monic equation and the same argument for its inverse. Ostrowski therefore reduces the restriction to the usual real or one $p$-adic value. Extensions are indexed by irreducible local factors, as in (8.1)–(8.2), printed pp. 161–162 / PDF pp. 180–181.
>
> Over $\mathbb R$, $X^2-5$ has two real roots, giving exactly the two displayed embeddings. For odd $p\ne5$, Hensel and reduction show that $5$ is a square in $\mathbb Q_p$ exactly when it is a square modulo $p$. Quadratic reciprocity gives $(5/p)=(p/5)$. If the symbol is $1$, the two distinct roots give the two displayed absolute values. If it is $-1$, the local polynomial is irreducible, so there is one valuation; the unique-extension norm formula gives the square root of $|a^2-5b^2|_p$.
>
> At $p=5$, $X^2-5$ is Eisenstein and irreducible, giving one ramified quadratic local field and the same norm formula. At $p=2$, the integral generator $\theta=(1+\sqrt5)/2$ has polynomial $X^2-X-1$, whose reduction $X^2+X+1$ is irreducible over $\mathbb F_2$. Thus it gives one unramified quadratic extension and again one valuation with the norm formula. These cases exhaust all restrictions and all local factors. At a split prime the norm formula alone would be the geometric mean of the two extensions and is not an absolute value; it is used only in the irreducible cases.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 1, printed pp. 165–166, PDF pp. 184–185].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
