---
title: "Exercise R291: Positive Polynomials on a Closed Interval"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-rings
  - sum-of-squares
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercise 3, printed p. 462, PDF p. 477"
created: 2026-09-25
---

# Exercise R291: Positive Polynomials on a Closed Interval

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 3
> Let $\alpha\le t\le\beta$ be a real interval, and let $f(t)$ be a real polynomial which is positive on this interval. Show that $f(t)$ can be written in the form
>
> $$
> c\left(\sum Q_\nu^2+\sum(t-\alpha)Q_\mu^2+\sum(\beta-t)Q_\lambda^2\right),
> $$
>
> where $Q^2$ denotes a square, and $c\ge0$. *Hint:* Split the polynomial, and use the identity
>
> $$
> (t-\alpha)(\beta-t)
> =\frac{(t-\alpha)^2(\beta-t)+(t-\alpha)(\beta-t)^2}{\beta-\alpha}.
> $$
>
> *Remark.* The above seemingly innocuous result is a key step in developing the spectral theorem for bounded hermitian operators on Hilbert space. See the appendix of [La 72] and also [La 85].

## Hints

> [!hint]- Hint 1
> Factor $f$ over $\mathbb R$. Its real linear factors have roots outside the closed interval; its irreducible quadratic factors are positive on all of $\mathbb R$ after choosing their signs.

> [!hint]- Hint 2
> A positive linear factor with a root to the left is a positive constant plus a multiple of $t-\alpha$; one with a root to the right uses $\beta-t$. A positive irreducible quadratic is a sum of two squares after completing the square.

> [!hint]- Hint 3
> Show that sums of the required form are closed under multiplication. For the mixed product $(t-\alpha)(\beta-t)$, use the identity in the printed hint. Treat $\alpha=\beta$ separately because that identity divides by $\beta-\alpha$.

## Solution

> [!success]- Independently derived solution
> ### Nondegenerate interval
> Assume first that $\alpha<\beta$. Put $a=t-\alpha$, $b=\beta-t$, and $s=\beta-\alpha>0$, so $a+b=s$. Let
> $$
> M=\left\{\sum_i p_i(t)^2+a\sum_j q_j(t)^2+b\sum_k r_k(t)^2:
> p_i,q_j,r_k\in\mathbb R[t]\right\}.
> $$
> The set $M$ is closed under addition and multiplication by nonnegative real constants. It is also closed under products. Expanding a product of two elements reduces this assertion to products of one square from each of the three summand types. The terms with factors $1$, $a^2$, or $b^2$ already have the required form because $a^2P^2$ and $b^2P^2$ are squares. For a mixed term, the printed identity gives
> $$
> abP^2
> =b\left(\frac{aP}{\sqrt{s}}\right)^2
> +a\left(\frac{bP}{\sqrt{s}}\right)^2\in M.
> $$
> Finite sums of these products prove multiplicative closure.
>
> Factor $f$ into real linear and irreducible quadratic factors. Since $f(t)>0$ on $[\alpha,\beta]$, no real root lies in the interval. Each linear factor can be signed to be positive there. If its root $\rho<\alpha$, its positive form is a positive multiple of
> $$
> t-\rho=(t-\alpha)+(\alpha-\rho)\in M.
> $$
> If $\rho>\beta$, its positive form is a positive multiple of
> $$
> \rho-t=(\beta-t)+(\rho-\beta)\in M.
> $$
> Each irreducible real quadratic can be signed to have positive leading coefficient and then completed to a positive constant times $(t-u)^2+v^2$, with $v\ne0$; hence it belongs to $M$. The product of the signed factors has a positive scalar coefficient because $f$ is positive somewhere on the interval. Multiplicative closure gives $f\in M$, which is the required representation (take $c=1$, or extract any common positive coefficient as $c$).
>
> ### Degenerate interval
> If $\alpha=\beta$, the printed hint's denominator vanishes, but the assertion remains true. Positivity on the one-point interval means $f(\alpha)>0$. Write $f(t)=f(\alpha)+(t-\alpha)h(t)$ for $h\in\mathbb R[t]$. The difference-of-squares identity
> $$
> h=\left(\frac{h+1}{2}\right)^2-\left(\frac{h-1}{2}\right)^2
> $$
> yields
> $$
> f(t)=\bigl(\sqrt{f(\alpha)}\bigr)^2
> +(t-\alpha)\left(\frac{h+1}{2}\right)^2
> +(\alpha-t)\left(\frac{h-1}{2}\right)^2,
> $$
> again of the printed form.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]

## Notes

- **Source status:** The statement, all three sums, the coefficient condition $c\ge0$, the hint identity, and the remark were visually checked at [S2, Ch. XI, Ex. 3, printed p. 462, PDF p. 477]. The proof is independent. The cited spectral-theorem connection is a source remark, not a result proved in this note.
- **Interval boundary:** The printed wording does not explicitly impose $\alpha<\beta$. The source's hint requires it; the one-point case is therefore proved separately.
- **Coefficient:** Because $f$ is strictly positive, any nonempty displayed representation has $c>0$ even though the printed condition only says $c\ge0$. The proof does not alter the printed condition.
