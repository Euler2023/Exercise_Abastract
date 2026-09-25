---
title: "Exercise F109: Imaginary Quadratic Fields inside Qp"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - p-adic-numbers
  - quadratic-fields
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 6, printed p. 496, PDF p. 511"
created: 2026-09-25
---

# Exercise F109: Imaginary Quadratic Fields inside Qp

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 6
> Let $\mathbb Q_p$ be a $p$-adic field. Show that $\mathbb Q_p$ contains infinitely many quadratic fields of the form $\mathbb Q(\sqrt{-m})$, with $m$ a positive integer.

## Hints

> [!hint]- Hint 1: Find local squares
> A $p$-adic number sufficiently close to $1$ is a square. Arrange $-m\equiv1\pmod p$ for odd $p$, or $-m\equiv1\pmod8$ for $p=2$.

> [!hint]- Hint 2: Distinguish global square classes
> To keep the quadratic fields different, make a new prime $q$ divide $m$ to odd order while avoiding all primes dividing the earlier choices.

> [!hint]- Hint 3: Combine congruences
> Use the Chinese remainder theorem to impose both the $p$-adic square condition and $m\equiv q\pmod{q^2}$.

## Solution

> [!success]- Solution
> Fix the prime $p$. We construct positive integers $m_1,m_2,\ldots$ by induction. Suppose $m_1,\ldots,m_{j-1}$ have been chosen. Select a prime $q\ne p$ that divides none of them; such a prime exists because only finitely many primes divide their product. Set $r=1$ when $p$ is odd and $r=3$ when $p=2$. Since $p^r$ and $q^2$ are coprime, the Chinese remainder theorem gives a positive integer $m_j$ satisfying
>
> $$
> m_j\equiv-1\pmod{p^r},
> \qquad
> m_j\equiv q\pmod{q^2}.
> $$
>
> The first congruence makes $-m_j$ a square in $\mathbb Q_p$. For odd $p$, apply the simple-root form of Hensel's lemma to $T^2+m_j$ at $T=1$: its value is divisible by $p$ and its derivative $2$ is a unit. For $p=2$, the congruence gives $-m_j\equiv1\pmod8$, and the stronger root criterion applies at $T=1$ because $v_2(1+m_j)\ge3>2v_2(2)=2$. Choose $\beta_j\in\mathbb Q_p$ with $\beta_j^2=-m_j$. Sending $\sqrt{-m_j}$ to $\beta_j$ embeds $\mathbb Q(\sqrt{-m_j})$ into $\mathbb Q_p$.
>
> The second congruence says $v_q(m_j)=1$, whereas $v_q(m_i)=0$ for every $i<j$. If two quadratic fields $\mathbb Q(\sqrt{-m_j})$ and $\mathbb Q(\sqrt{-m_i})$ were equal, then $m_j/m_i$ would be a square in $\mathbb Q^\times$: indeed, comparing the rational and $\sqrt{-m_i}$ coefficients of $\sqrt{-m_j}$ in their common quadratic field forces this square-class relation. Its $q$-adic valuation would then be even, contrary to $v_q(m_j/m_i)=1$. Thus the fields are pairwise distinct, and there are infinitely many of them.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Routing:** The aim is to construct distinct quadratic subfields of $\mathbb Q_p$; the primary computation uses square classes and field embeddings.
- **Proof status:** The construction and distinctness argument are independently derived. The Chinese remainder theorem and Lang's root criterion, Proposition 7.6 [S2, Ch. XII, §7, printed p. 493, PDF p. 508], are the named standard inputs. No theorem on primes in arithmetic progressions is needed.
- **Source status:** The minus sign under the radical, the positivity of $m$, and the quantifier “infinitely many” were checked against [S2, Ch. XII, Exercise 6, printed p. 496, PDF p. 511].
