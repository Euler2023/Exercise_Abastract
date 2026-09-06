---
title: "Exercise R233: Chevalley-Warning and Polynomial Functions"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 7, printed pp. 213-214, PDF pp. 228-229"
created: 2026-09-06
---

# Exercise R233: Chevalley-Warning and Polynomial Functions

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 7
>
> (a) Let $k$ be a finite field with $q$ elements. Let $f(X_1,\ldots,X_n)\in k[X]$ have degree $d$ and $f(0,\ldots,0)=0$. A tuple $a\in k^n$ with $f(a)=0$ is called a zero. If $n>d$, show that $f$ has at least one other zero. [Hint: compare the degrees of the reduced polynomial belonging to $1-f(X)^{q-1}$ and $(1-X_1^{q-1})\cdots(1-X_n^{q-1})$. This theorem is due to Chevalley.]
>
> (b) Refine this by showing that the number $N$ of zeros is $0\pmod p$, where $p=\operatorname{char}k$. For $i\ge1$ show that
> $$
> \sum_{x\in k}x^i=\begin{cases}-1,&q-1\mid i,\\0,&\text{otherwise}.\end{cases}
> $$
> Denote this function by $\psi(i)$. Show that
> $$
> N\equiv\sum_{x\in k^n}(1-f(x)^{q-1}),\qquad
> \sum_{x\in k^n}x_1^{i_1}\cdots x_n^{i_n}=\psi(i_1)\cdots\psi(i_n)
> $$
> for $i_j\ge0$, and that both terms in the sum for $N$ yield zero modulo $p$. The argument is due to Warning.
>
> (c) Extend the result to $r$ polynomials $f_1,\ldots,f_r$ of degrees $d_1,\ldots,d_r$ in $n$ variables. If they have no constant term and $n>\sum d_i$, show that they have a nontrivial common zero.
>
> (d) Show that an arbitrary function $f:k^n\to k$ can be represented by a polynomial.

## Hints

> [!hint]- Hint 1
> For (b), sum a monomial separately in each coordinate; remember that $\sum_{x\in k}1=q=0$ in $k$.

> [!hint]- Hint 2
> The indicator of the common zero set is $\prod_j(1-f_j^{q-1})$. Its total degree is smaller than $n(q-1)$.

## Solution

> [!success]- Solution
> ### Approach
> For (b), sum a monomial separately in each coordinate; remember that $\sum_{x\in k}1=q=0$ in $k$.
>
> ### Proof
> All displayed sums are taken in $k$; an integer count is mapped to the prime subfield. Set $\psi(0)=q=0$ (including the monomial convention $x^0=1$ at $x=0$).
>
> **Power sums.** If $i>0$ and $q-1\mid i$, every nonzero summand is $1$, giving $q-1=-1$. Otherwise use a generator $u$ of the cyclic group $k^\times$: $u^i\ne1$. Multiplication by $u$ permutes $k$, so $S=\sum x^i=u^iS$, forcing $S=0$. Cyclicity of a finite field's multiplicative group is the input here.
>
> **(b)** A value $1-f(x)^{q-1}$ is $1$ if $f(x)=0$ and $0$ otherwise. Summing therefore gives $N$ in $k$. Distributivity proves the product formula for each monomial. A monomial whose sum is nonzero must have every exponent a positive multiple of $q-1$, so its total degree is at least $n(q-1)$. But every monomial in $f^{q-1}$ has total degree at most $d(q-1)<n(q-1)$. All its monomial sums vanish. The sum of the constant $1$ is $q^n=0$, so $N=0$ in $k$, equivalently $p\mid N$ as an integer.
>
> **(a)** Zero is already a zero, so $N\ge1$; divisibility by $p$ gives $N\ge p\ge2$. To also justify the printed hint, reduce polynomials using $X_j^q=X_j$ until each coordinate degree is at most $q-1$. Reduction never increases total degree. A polynomial with each coordinate degree below $q$ is determined by its values on $k^n$: induction on $n$, using the one-variable root bound, proves this. If zero were the only zero, the reduced polynomial of $1-f^{q-1}$ would equal $\prod_j(1-X_j^{q-1})$ by their values. The latter has total degree $n(q-1)$, exceeding the former's bound, a contradiction.
>
> **(c)** Replace the indicator by $\prod_{j=1}^r(1-f_j^{q-1})$. Its total degree is at most $(q-1)\sum_jd_j<n(q-1)$. The same monomial argument proves that its sum, the number of common zeros, is divisible by $p$. Since the zero tuple is a common zero, another exists. Identically zero equations can simply be omitted.
>
> **(d)** For $a\in k^n$, put $\delta_a(X)=\prod_j(1-(X_j-a_j)^{q-1})$. This is $1$ at $a$ and $0$ at every other tuple. Thus
> $$
> P(X)=\sum_{a\in k^n}f(a)\delta_a(X)
> $$
> represents the given function. This construction also has degree at most $q-1$ in each variable.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Ring Theory is primary: polynomial reduction, degrees, and monomial sums supply the proof; finite-field structure is the cross-topic input.
- **Notation:** The source defines $\psi$ first for positive indices and then uses zero indices. The extension $\psi(0)=0$ is made explicit above.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 7, printed pp. 213-214, PDF pp. 228-229]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
