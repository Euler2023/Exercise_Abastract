---
title: "Exercise R338: Inert Primes and Quadratic Nonresidues"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §3, Exercise 3, printed p. 23, PDF p. 42"
created: 2026-10-17
---

# Exercise R338: Inert Primes and Quadratic Nonresidues

## Problem Statement

> [!question] Neukirch I.3.3 — printed statement
> Let $d$ be squarefree and $p$ a prime number not dividing $2d$. Let $\mathfrak o$ be the ring of integers of $\mathbb Q(\sqrt d)$. Show that $(p)=p\mathfrak o$ is a prime ideal of $\mathfrak o$ if and only if the congruence $x^2\equiv d\pmod p$ has no solution.

> [!warning] Source issue: the quadratic-field hypothesis excludes $d=1$
> With the usual convention that $1$ is squarefree, the printed wording admits $d=1$. Then $\mathfrak o=\mathbb Z$ and $p\mathbb Z$ is prime, but $x^2\equiv1\pmod p$ has the solution $x=1$. The intended assertion therefore requires that $\mathbb Q(\sqrt d)$ be a quadratic field, or equivalently, for squarefree $d$, that $d\neq1$. The solution proves this intended version and keeps the printed statement above unchanged.

## Hints

> [!hint]- Hint 1: Work with the quotient by $p$
> A proper ideal $I$ is prime precisely when its quotient ring is an integral domain. Use the full quadratic integer ring from Exercise R333; it may have generator $(1+\sqrt d)/2$ rather than $\sqrt d$.

> [!hint]- Hint 2: The factor $2$ becomes invertible
> The hypothesis $p\nmid2d$ makes $p$ odd. Hence the residue of $(1+\sqrt d)/2$ is a polynomial in the residue of $\sqrt d$ in $\mathfrak o/p\mathfrak o$. Establish an isomorphism $\mathfrak o/p\mathfrak o\cong\mathbb F_p[T]/(T^2-\overline d)$, including injectivity.

> [!hint]- Hint 3: A quadratic polynomial over a field
> The polynomial $T^2-\overline d$ is irreducible exactly when it has no root in $\mathbb F_p$. In the irreducible case the Euclidean algorithm gives inverses in the quotient. A root $r$ gives two nonzero classes $T-r$ and $T+r$ whose product is zero.

## Solution

> [!success]- Independent derivation for the intended quadratic case
> Assume $d$ is a squarefree integer with $d\neq1$, let $K=\mathbb Q(\sqrt d)$, and put $\delta=\sqrt d$. The condition that no prime divisor of $2d$ is $p$ in particular excludes $d=0$ and gives $p\neq2$. Thus $K$ is genuinely quadratic and $2$ is invertible in $\mathbb F_p$.
>
> **1. Use the full integer ring.** The calculation in [[02 - Ring Theory/Exercises/Exercise R333 - Integral Bases and Discriminants of Quadratic Number Fields|Exercise R333, Step 3]] gives
> $$
> \mathfrak o=
> \begin{cases}
> \mathbb Z[\delta],&d\equiv2\text{ or }3\pmod4,\\
> \mathbb Z[\omega],\quad\omega=(1+\delta)/2,&d\equiv1\pmod4.
> \end{cases}
> $$
> Here the expressions $1,\delta$ in the first case and $1,\omega$ in the second are integer bases. We will show that the difference between these two presentations disappears after reduction modulo the odd prime $p$.
>
> **2. Construct the quotient presentation.** Let $\overline d$ denote the image of $d$ in $\mathbb F_p$ and let $\overline\delta$ denote the image of $\delta$ in $\mathfrak o/p\mathfrak o$. Evaluation at $\overline\delta$ induces a ring homomorphism
> $$
> \varphi:\mathbb F_p[T]/(T^2-\overline d)
> \longrightarrow\mathfrak o/p\mathfrak o,
> \qquad T\longmapsto\overline\delta,
> $$
> because $\delta^2=d$. If $\mathfrak o=\mathbb Z[\delta]$, the map is surjective directly. If $\mathfrak o=\mathbb Z[\omega]$, choose $t\in\mathbb Z$ such that $2t\equiv1\pmod p$. Since $\delta=2\omega-1$,
> $$
> t(1+\overline\delta)=2t\overline\omega=\overline\omega.
> $$
> Thus the generator $\overline\omega$ also lies in the image, and $\varphi$ is surjective in this case as well.
>
> To check injectivity, division by the monic polynomial $T^2-\overline d$ expresses each class uniquely as $a+bT$ with $a,b\in\mathbb F_p$. Choose integer representatives for $a,b$. If its image is zero, then $a+b\delta\in p\mathfrak o$. In the first integer basis, this says $p\mid a$ and $p\mid b$. In the second integer basis, use
> $$
> a+b\delta=(a-b)+2b\omega.
> $$
> Uniqueness of integer coordinates gives $p\mid(a-b)$ and $p\mid2b$. Because $p$ is odd, this again implies $p\mid b$ and $p\mid a$. Hence the original class was zero, proving injectivity. We obtain
> $$
> \mathfrak o/p\mathfrak o
> \cong\mathbb F_p[T]/(T^2-\overline d).
> $$
> This quotient has exactly $p^2$ elements, represented by the distinct classes $a+bT$; in particular it is not the zero ring, so $p\mathfrak o$ is proper.
>
> **3. Decide when the quotient is a domain.** A degree-two polynomial over a field is reducible if and only if it has a root: any nontrivial factorization has a linear factor, and a root gives a linear divisor by polynomial division. Thus $T^2-\overline d$ is irreducible exactly when $x^2\equiv d\pmod p$ has no solution.
>
> If it is irreducible, every nonzero remainder $h$ of degree less than $2$ is relatively prime to it. The polynomial Euclidean algorithm supplies $A,B\in\mathbb F_p[T]$ with
> $$
> A(T)h(T)+B(T)(T^2-\overline d)=1.
> $$
> Hence the class of $A$ is the inverse of the class of $h$, and the quotient is a field, therefore a domain.
>
> If instead $r\in\mathbb F_p$ satisfies $r^2=\overline d$, then
> $$
> T^2-\overline d=(T-r)(T+r).
> $$
> Neither linear polynomial has zero class modulo a monic quadratic, but their product does. Therefore the quotient is not a domain. This argument remains valid without any appeal to ideal factorization; the hypothesis $p\nmid d$ also ensures that the two roots here are distinct.
>
> Finally, the prime-ideal quotient criterion gives
> $$
> p\mathfrak o\text{ is prime}
> \quad\Longleftrightarrow\quad
> \mathfrak o/p\mathfrak o\text{ is a domain}
> \quad\Longleftrightarrow\quad
> x^2\equiv d\pmod p\text{ has no solution}.
> $$
> A rational prime with $p\mathfrak o$ prime is called inert in this quadratic field. In that case the displayed quotient is a field with $p^2$ elements.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Irreducible Polynomials|Irreducible Polynomials]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** [S4, Ch. I, §3, Exercise 3, printed p. 23, PDF p. 42]. The condition $p\nmid2d$, ideal $(p)=p\mathfrak o$, and congruence were checked on the rendered original page. The source leaves the exclusion $d\neq1$ implicit in its quadratic-field setting; the visible warning records the literal degenerate counterexample. No source figure is needed.
- **Proof inputs:** The full quadratic integer-ring formula is imported from [[02 - Ring Theory/Exercises/Exercise R333 - Integral Bases and Discriminants of Quadratic Number Fields|Exercise R333]]. The proof uses integer-coordinate uniqueness, polynomial division and the Euclidean algorithm over $\mathbb F_p$, and the prime-ideal quotient criterion. The quotient isomorphism and both implications of the residue criterion are proved above.
- **Proof boundary:** This is an independent derivation, not an invocation of a general prime-splitting or Dedekind factorization theorem. It works with the full integer ring, including the half-integral generator when $d\equiv1\pmod4$. The odd-prime argument does not assert the same presentation at $p=2$.
- **Routing:** Ring Theory is primary because primality is decided through a quotient ring and a polynomial ideal. Quadratic integer bases and arithmetic in a finite field are cross-topic prerequisites.
