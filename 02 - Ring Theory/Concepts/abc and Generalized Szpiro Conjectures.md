---
title: abc and Generalized Szpiro Conjectures
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-09-06
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, \u00a77, printed pp. 196-199, PDF pp. 211-214; Exercises 14-15, printed p. 215, PDF p. 230"
source_status: partially-verified
status: not-started
---

# abc and Generalized Szpiro Conjectures

## Definition

> [!info] Definition
> For $m\in\mathbb Z\setminus\{0\}$, define $\operatorname{rad}(m)=\prod_{p\mid m}p$, with $\operatorname{rad}(\pm1)=1$.
>
> **The abc hypothesis used here:** for every $\varepsilon>0$ there is $C_\varepsilon>0$ such that any nonzero pairwise coprime integers $a+b=c$ satisfy
> $$
> \max(|a|,|b|,|c|)\le C_\varepsilon\operatorname{rad}(abc)^{1+\varepsilon}.
> $$
> **Lang's elementary generalized Szpiro hypothesis:** for every $\varepsilon>0$ and fixed $B$, the conditions $u,v\in\mathbb Z\setminus\{0\}$, $\gcd(u,v)\le B$, and $D=4u^3-27v^2\ne0$ imply
> $$
> |u|\le C_{\varepsilon,B}\operatorname{rad}(D)^{2+\varepsilon},\qquad
> |v|\le C_{\varepsilon,B}\operatorname{rad}(D)^{3+\varepsilon}.
> $$

## Intuition

The radical counts each prime once, discarding repeated powers. These inequalities compare arithmetic size with that reduced prime support. In this archive they are explicitly hypotheses for conditional implications; the exercise solutions do not establish them unconditionally.

## Key Properties

- The constants are uniform in the integer variables but may depend on the displayed epsilon and, in generalized Szpiro, the bound on the common divisor. This uniformity is essential.
- For nonzero integers $a+b=c$ with $\gcd(a,b)=1$, every pair is coprime, since a common divisor of $a,c$ or $b,c$ also divides the remaining term.
- $\operatorname{rad}(mn)\le\operatorname{rad}(m)\operatorname{rad}(n)$ and $\operatorname{rad}(m^r)=\operatorname{rad}(m)$ for positive integers $r$, by prime factorization.
- The discriminant of $x(x-3a)(x+3b)$ is $3^6(abc)^2$. Its depressed-cubic coefficient $u=3(a^2+ab+b^2)$ controls the square of the height, while the common divisor of its two nonleading coefficients divides $9$. The linked Szpiro exercise proves every step and obtains abc.
- Under abc, the product of primes occurring to exponent exactly one in $2^n-1$ grows without bound. The linked prime exercise proves this estimate and derives infinitely many base-$2$ non-Wieferich primes.

## Examples

> [!example] Examples
> For $(a,b,c)=(1,8,9)$, the height is $9$ and $\operatorname{rad}(abc)=6$. A single example neither proves nor disproves a bound with an unspecified uniform constant.
>
> For $a=1,b=2,c=3$, the cubic coefficients are $u=21,v=-20$, and $4u^3-27v^2=3^6(abc)^2=26244$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[02 - Ring Theory/Concepts/Mason-Stothers Theorem|Mason-Stothers Theorem]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

These are the formulations in [S2, Ch. IV, §7, printed pp. 196-199, PDF pp. 211-214], with quantifiers and nonzero boundaries explicit. The archive proves only the assigned implications in Exercises 14-15 under these hypotheses. Lang's elementary radical formulation is distinguished from versions using the conductor of an elliptic curve. The sign inconsistency in the scaled Frey polynomial on printed p. 199 / PDF p. 214 is preserved and corrected in the linked exercise. This note makes no assessment of contemporary claims about the conjectures.
