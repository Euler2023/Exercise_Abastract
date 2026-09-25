---
title: "Exercise F107: Gauss Norms on Polynomial Rings"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - valuations
  - polynomial-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 1, printed pp. 495–496, PDF pp. 510–511"
created: 2026-09-25
---

# Exercise F107: Gauss Norms on Polynomial Rings

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 1
> (a) Let $K$ be a field with a valuation. For $f(X)=a_0+a_1X+\cdots+a_nX^n$ in $K[X]$, define $|f|=\max_{0\le i\le n}|a_i|$. Show that this extends the valuation to $K[X]$ and then to the rational function field $K(X)$. Explain how Gauss's lemma is a special case, and generalize to polynomials in several variables.
>
> (b) For a polynomial $f$ with complex coefficients, let $|f|$ be the maximum absolute value of its coefficients. Given an integer $d\ge1$, show that constants $C_1,C_2>0$, depending only on $d$, exist such that, whenever $f,g\in\mathbb C[X]$ have degrees at most $d$,
>
> $$
> C_1|f||g|\le |fg|\le C_2|f||g|.
> $$
>
> The printed hint suggests induction on the number of linear factors and observes that the right inequality is immediate.

## Hints

> [!hint]- Hint 1: Reduce coefficients
> In (a), divide each nonzero polynomial by a coefficient of largest absolute value. Its reduction in the residue polynomial ring is nonzero.

> [!hint]- Hint 2: Use an integral domain
> The product of two nonzero reduced polynomials is nonzero. For Gauss's lemma over $\mathbb Z$, apply this argument for every $p$-adic absolute value.

> [!hint]- Hint 3: Control one complex linear factor
> If $h=(X-\alpha)g$ and $\deg g=n$, recover the coefficients of $g$ recursively from those of $h$, starting at the high-degree end when $|\alpha|\le1$ and at the constant end when $|\alpha|\ge1$.

## Solution

> [!success]- Solution
> **(a) The non-archimedean Gauss norm.** Here a valuation is expressed by a non-archimedean absolute value on $K$. Set $|0|=0$. The ultrametric inequality applied coefficientwise gives $|f+g|\le\max(|f|,|g|)$, and $|c|$ for a constant polynomial agrees with its original value in $K$. Convolution of coefficients gives $|fg|\le|f||g|$.
>
> For the reverse inequality, choose coefficients $a$ of $f$ and $b$ of $g$ with $|a|=|f|$ and $|b|=|g|$. Put $\mathcal O=\{x\in K:|x|\le1\}$, $\mathfrak m=\{x\in K:|x|<1\}$, and $k=\mathcal O/\mathfrak m$. The coefficientwise reductions of $a^{-1}f$ and $b^{-1}g$ are nonzero polynomials in $k[X]$. Their product is nonzero because $k[X]$ is an integral domain. Thus some coefficient of $(ab)^{-1}fg$ has absolute value $1$, while all its coefficients have absolute value at most $1$. Consequently $|fg|=|a||b|=|f||g|$.
>
> Multiplicativity makes $|f/g|:=|f|/|g|$ well defined for $f,g\in K[X]$ with $g\ne0$: if $fg'=f'g$, the two proposed values agree. The ultrametric inequality for fractions follows by taking a common denominator, so this is an extension to $K(X)$.
>
> To recover the classical Gauss lemma, let $f,g\in\mathbb Z[X]$ be primitive. For every prime $p$, at least one coefficient of each is not divisible by $p$, so their $p$-adic Gauss norms both equal $1$. Their product has Gauss norm $1$ at every $p$, hence no prime divides all its coefficients: $fg$ is primitive. Exactly the same reduction argument works for $K[X_1,\ldots,X_r]$, since $k[X_1,\ldots,X_r]$ is an integral domain. Its coefficient maximum is multiplicative and extends to $K(X_1,\ldots,X_r)$.
>
> **(b) Uniform bounds over $\mathbb C$.** If $\deg f,\deg g\le d$, each coefficient of $fg$ is a sum of at most $d+1$ products. The ordinary triangle inequality therefore gives $|fg|\le(d+1)|f||g|$.
>
> For the lower bound, first let $g=\sum_{i=0}^{n}b_iX^i\ne0$ and $h=(X-\alpha)g=\sum_{i=0}^{n+1}c_iX^i$. If $|\alpha|\le1$, the recurrence $b_i=c_{i+1}+\alpha b_{i+1}$, read downward from $b_{n+1}=0$, gives $|g|\le(n+1)|h|$. If $|\alpha|\ge1$, the recurrence $b_i=(b_{i-1}-c_i)/\alpha$, read upward from $b_{-1}=0$, gives $|g|\le(n+1)|h|/|\alpha|$. In both cases,
>
> $$
> |(X-\alpha)g|\ge\frac{\max(1,|\alpha|)}{n+1}|g|.
> $$
>
> By the fundamental theorem of algebra, write $f=a\prod_{j=1}^{m}(X-\alpha_j)$, where $m\le d$. Apply the preceding estimate successively to $g,(X-\alpha_1)g,\ldots$ and use
>
> $$
> |f|\le |a|\prod_{j=1}^{m}(1+|\alpha_j|)
> \le 2^m|a|\prod_{j=1}^{m}\max(1,|\alpha_j|).
> $$
>
> Since $\deg g=n\le d$ and every factor $n+j$ is at most $2d$,
>
> $$
> |fg|\ge
> \frac{|a||g|\prod_{j=1}^{m}\max(1,|\alpha_j|)}
> {\prod_{j=1}^{m}(n+j)}
> \ge \frac{|f||g|}{2^d(2d)^d}.
> $$
>
> Thus $C_1=[2^d(2d)^d]^{-1}$ and $C_2=d+1$ work for $d\ge1$. Zero polynomials cause no difficulty; for $d=0$, both constants may be $1$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing:** The central construction extends a valued field to its rational function field $K(X)$; Gauss's lemma is a ring-theoretic consequence linked above.
- **Method boundary:** The coefficient maximum is exactly multiplicative for a non-archimedean absolute value. In (b), the usual complex absolute value only yields bounds on polynomials of bounded degree.
- **Proof status:** The solutions are independently derived. The fundamental theorem of algebra is the named external standard input used to factor $f$ in (b).
- **Source status:** The complete multipart statement and the inequality were checked against the original PDF [S2, Ch. XII, Exercise 1, printed pp. 495–496, PDF pp. 510–511]. The printed hint is recorded in the problem statement.
