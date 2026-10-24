---
title: 'Exercise R409: Class Number One for the Intended Quintic Field'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 5, printed p. 414, PDF p. 433
source_refs:
- S4/ch-VI/sec-7/ex-5
created: '2026-10-23'
proof_status: source-ambiguity
---

# Exercise R409: Class Number One for the Intended Quintic Field

## Problem Statement

> [!question] Neukirch VI.7.5
> $K$ has class number $1$.
> **Printed hint:** Show, using chap. I, §6, exercise 3, that every ideal class of $K$ contains an ideal $\mathfrak a$ with $\mathfrak N(\mathfrak a)<4$. If $\mathfrak N(\mathfrak a)\ne1$, then $\mathfrak a$ has to be a prime ideal $\mathfrak p$ such that $\mathfrak N(\mathfrak p)=2$ or $3$. Hence $\mathcal O_k/\mathfrak p=\mathbb Z/2\mathbb Z$ or $=\mathbb Z/3\mathbb Z$, so $f$ has a root mod $2$ or $3$, which is not the case.

> [!warning] Source issue / proof scope
> The printed capital K is the degree-120 splitting field; the hint computes the degree-five field k. Only h_k=1 is proved here. The original capital-K assertion remains unproved.

> [!warning] Source issue — capital K and lowercase k
> The original assertion names the degree-120 splitting field $K$, whereas its hint switches to $\mathcal O_k$ and the degree-five Minkowski bound. The derivation below proves $h_k=1$. The printed assertion $h_K=1$ remains unproved in this note.

## Hints

> [!hint]- Hint
> Compute the Minkowski bound for the degree-five field $k$. Check whether the hint can apply to the degree-120 splitting field $K$.

> [!hint]- Stronger hint
> The degree-five field has signature (1,2), giving a Minkowski bound less than 4; neither 2 nor 3 has a residue-degree-one prime.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Source issue.** The printed problem uses uppercase $K$, while the hint explicitly uses the integer ring of lowercase $k$ and the Minkowski bound for a quintic field. We prove the intended corrected assertion $h_k=1$. This does not prove the class-number assertion for the degree-$120$ splitting field $K$.
> Put $r=5^{-1/4}$. The real zeros of $f'=5X^4-1$ are $\pm r$, with $f(-r)=1+4r/5>0$ and $f(r)=1-4r/5>0$. The quintic therefore has exactly one real root, and the signature of $k$ is $(r_1,r_2)=(1,2)$.
> The Minkowski ideal-class bound gives an integral ideal $\mathfrak a$ in every class with
> $$
> N\mathfrak a\le
> \left(\frac4\pi\right)^2\frac{5!}{5^5}\sqrt{2869}
> \approx3.3344<4.
> $$
> If its norm is not $1$, it must therefore be $2$ or $3$. An integral ideal of prime norm is a prime ideal of residue degree one. Since $\mathcal O_k=\mathbb Z[\alpha]$, such primes correspond to roots of $f$ in $\mathbb F_2$ or $\mathbb F_3$. Substitution into all $2$ and all $3$ residue classes gives nonzero values, so there are no such primes. Hence $N\mathfrak a=1$, $\mathfrak a=\mathcal O_k$, and every ideal class is trivial.
> The numerical Minkowski bound was independently computed as $3.3343926176$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]

## Notes

The statement was checked against the original PDF rendered at 200 dpi [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 5, printed p.414, PDF p.433]. The solution is independently derived. The original assertion about the class number of uppercase $K$ remains unproved in this note; only the hint-supported corrected assertion for lowercase $k$ has been established.

- **Source context:** Here $f=X^5-X+1$, $k=\mathbb Q(\alpha)$, and $K$ is its degree-$120$ splitting field from Exercises 2–4. The printed hint also begins with capital $K$ and later writes $\mathcal O_k$; both are preserved above.
