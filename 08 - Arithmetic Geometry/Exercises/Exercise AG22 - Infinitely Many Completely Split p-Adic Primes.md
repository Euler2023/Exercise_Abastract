---
title: "Exercise AG22: Infinitely Many Completely Split p-Adic Primes"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - number-fields
  - p-adic-fields
  - polynomial-prime-divisors
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 12, printed p. 497, PDF p. 512"
created: 2026-09-25
---

# Exercise AG22: Infinitely Many Completely Split p-Adic Primes

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 12
> **(a)** Let $f(X)$ be a polynomial of degree $1$ in $\mathbb Z[X]$. Show that the values $f(a)$ for $a\in\mathbb Z$ are divisible by infinitely many primes.
>
> **(b)** Let $F$ be a finite extension of $\mathbb Q$. Show that there are infinitely many primes $p$ such that all conjugates of $F$ (in an algebraic closure of $\mathbb Q_p$) actually are contained in $\mathbb Q_p$. [Hint: Use the irreducible polynomial of a generator for a Galois extension of $\mathbb Q$ containing $F$.]

## Hints

> [!hint]- Hint 1: The linear case
> If $f(X)=aX+b$ with $a\ne0$, solve $aX+b\equiv0\pmod p$ for every prime $p\nmid a$.

> [!hint]- Hint 2: Strengthen the prime-divisor statement
> For part (b), prove that the nonzero values of every nonconstant polynomial in $\mathbb Z[X]$ have infinitely many prime divisors. If a finite set $S$ contained all of them, choose $A=f(t_0)\ne0$ and examine $f(t_0+AMt)/A$, where $M$ is the product of the primes in $S$.

> [!hint]- Hint 3: Lift one simple root
> Choose an integral primitive generator of a finite Galois extension containing $F$. Outside the primes dividing its discriminant, a prime divisor of one polynomial value gives a simple root modulo $p$, hence a root in $\mathbb Q_p$.

## Solution

> [!success]- Solution
> **(a)** Write $f(X)=aX+b$ with $a\in\mathbb Z\setminus\{0\}$. For every prime $p\nmid a$, the residue class $a$ is invertible modulo $p$, so the congruence $at+b\equiv0\pmod p$ has an integer solution $t$. Thus $p$ divides a value of $f$. Only finitely many primes divide $a$, while there are infinitely many primes, proving (a).
>
> **A stronger lemma needed for (b).** Let $h\in\mathbb Z[X]$ be any nonconstant polynomial. We claim that the nonzero numbers $h(t)$, $t\in\mathbb Z$, are divisible by infinitely many distinct primes. Suppose instead that all their prime divisors belong to a finite set $S$. Choose $t_0$ with $A=h(t_0)\ne0$, and put $M=\prod_{p\in S}p$ (with $M=1$ if $S$ is empty). The polynomial
>
> $$
> g(T)=\frac{h(t_0+AMT)}{A}
> $$
>
> belongs to $\mathbb Z[T]$: its constant term is $1$, and every positive-degree term in the numerator has a factor $AM$, hence remains integral after division by $A$. Moreover $g(T)\equiv1\pmod M$. For any integer $t$ with $g(t)\ne0$, every prime divisor of $g(t)$ would divide $h(t_0+AMt)$ and thus belong to $S$; yet $g(t)\equiv1\pmod p$ for every $p\in S$. Therefore $g(t)=\pm1$ whenever it is nonzero. A nonconstant polynomial cannot take only the values $-1,0,1$ on all integers, a contradiction. This proves the lemma.
>
> **(b)** Choose a finite Galois extension $E/\mathbb Q$ containing $F$. By the primitive element theorem, take an algebraic integer $\alpha$ with $E=\mathbb Q(\alpha)$, and let $h\in\mathbb Z[X]$ be its monic irreducible polynomial. Since $E/\mathbb Q$ is separable, the discriminant $\Delta(h)$ is a nonzero integer. The lemma supplies infinitely many primes $p$ dividing some nonzero value $h(t_p)$; discard the finitely many primes dividing $\Delta(h)$.
>
> For every remaining $p$, the class of $t_p$ modulo $p$ is a root of $h$ and is simple because $p\nmid\Delta(h)$. Hensel's lemma lifts it to a root $\beta_p\in\mathbb Z_p$. The assignment $\alpha\mapsto\beta_p$ then embeds $E=\mathbb Q(\alpha)$ into $\mathbb Q_p$. Because $E/\mathbb Q$ is Galois, $h$ already splits in $E$; each of its roots belongs to $\mathbb Q(\alpha)$ and therefore maps into $\mathbb Q_p$. Hence $h$ splits completely over $\mathbb Q_p$. Every $\mathbb Q$-embedding of $E$ into an algebraic closure of $\mathbb Q_p$ sends its generator to one of these roots, so its whole image lies in $\mathbb Q_p$. Every $\mathbb Q$-embedding of $F$ into that closure extends to $E$, and thus every conjugate of $F$ lies in $\mathbb Q_p$, for infinitely many primes $p$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Routing:** The main conclusion concerns infinitely many rational primes and complete splitting of a number field in $\mathbb Q_p$, so Arithmetic Geometry is primary; normal closures and primitive elements are cross-topic prerequisites.
- **Source issue and proof boundary:** The original PDF explicitly says “degree $1$” in (a) [S2, Ch. XII, Ex. 12, printed p. 497, PDF p. 512]. That statement alone is too weak for the hint in (b), where the generator's irreducible polynomial can have higher degree. The stronger prime-divisor lemma is independently proved above rather than attributed to the source.
- **Other inputs:** The primitive element theorem, integrality after multiplying an algebraic generator by an integer, and the simple-root form of Hensel's lemma are used with their stated hypotheses. Lang proves the Hensel step in Ch. XII, §7, Corollary 7.4 [printed p. 493, PDF p. 508].
