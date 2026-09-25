---
title: "Exercise R293: Valuation Rings over Principal Ideal Domains"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - valuation-rings
  - localization
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 4, printed p. 496, PDF p. 511"
created: 2026-09-25
---

# Exercise R293: Valuation Rings over Principal Ideal Domains

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 4
> Let $A$ be a principal entire ring, and let $K$ be its quotient field. Let $\mathcal O$ be a valuation ring of $K$ containing $A$, with $\mathcal O\ne K$. Show that $\mathcal O=A_{(p)}$ for some prime element $p$ of $A$. The printed comment notes that this applies to both $\mathbb Z$ and $k[X]$ for a field $k$.

## Hints

> [!hint]- Hint 1: Take the center
> Intersect the maximal ideal $\mathfrak m_{\mathcal O}$ with $A$.

> [!hint]- Hint 2: Rule out the zero center
> If every nonzero element of $A$ were a unit in $\mathcal O$, its whole fraction field would lie in $\mathcal O$.

> [!hint]- Hint 3: Use the PID factorization
> Write a rational function as a power of a generator of the nonzero prime center times a unit of the corresponding localization.

## Solution

> [!success]- Solution
> Put $P=A\cap\mathfrak m_{\mathcal O}$. This is a prime ideal of $A$. It is nonzero: if $P=0$, every nonzero $a\in A$ lies outside $\mathfrak m_{\mathcal O}$ and is therefore a unit of the local ring $\mathcal O$. All fractions of $A$ then belong to $\mathcal O$, giving $\mathcal O=K$, contrary to the hypothesis.
>
> Since $A$ is a principal ideal domain, $P=(p)$ for a prime element $p\in A$. Every $s\in A\setminus(p)$ is a unit of $\mathcal O$, so the localization $A_{(p)}$ is contained in $\mathcal O$.
>
> Conversely, write any nonzero $x\in K$ as $x=p^n u$, where $n\in\mathbb Z$ and $u$ is a unit in $A_{(p)}$; this follows by extracting the full $p$-power from the numerator and denominator in the PID $A$. Both $u$ and $u^{-1}$ belong to $\mathcal O$. The element $p$ belongs to $\mathfrak m_{\mathcal O}$. If $n<0$ and $x$ also belonged to $\mathcal O$, then $1=p^{-n}u^{-1}x$ would lie in $\mathfrak m_{\mathcal O}$, an impossibility. Thus every nonzero element of $\mathcal O$ has $n\ge0$ and belongs to $A_{(p)}$. Therefore $\mathcal O=A_{(p)}$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Routing:** The proof is controlled by prime ideals and localization in a principal ideal domain; the valuation ring supplies the prime center.
- **Proof status:** The solution is independently derived from the definitions of a valuation ring, a PID, and localization.
- **Source status:** The statement, the nontriviality condition $\mathcal O\ne K$, and the examples $\mathbb Z$ and $k[X]$ were checked against [S2, Ch. XII, Exercise 4, printed p. 496, PDF p. 511].
