---
title: "Exercise R296: Teichmuller Representatives in Complete DVRs"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - discrete-valuation-rings
  - teichmuller-representatives
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 16, printed p. 497, PDF p. 512"
created: 2026-09-25
---

# Exercise R296: Teichmuller Representatives in Complete DVRs

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 16
> Let $F$ be as above. Show that there exists a system of representatives $R$ for $\mathfrak o/(\pi)$ in $\mathfrak o$ such that $R^p=R$ and that this system is unique (Teichmüller). *Hint:* Let $\alpha$ be a residue class in $k$. For each $\nu\ge0$ let $a_\nu$ be a representative in $\mathfrak o$ of $\alpha^{p^{-\nu}}$ and show that the sequence $a_\nu^{p^\nu}$ converges for $\nu\to\infty$, and in fact converges to a representative $a$ of $\alpha$, independent of the choices of $a_\nu$. Show that the system of representatives $R$ thus obtained is closed under multiplication, and that if $F$ has characteristic $p$, then $R$ is closed under addition, and is isomorphic to $k$.

> [!warning] Source issue: the residue field hypotheses are missing
> Exercise 15 never specified $p=\operatorname{char}k$, and this exercise does not say that $k$ is perfect. Both assumptions are needed: $R^p=R$ forces Frobenius $\alpha\mapsto\alpha^p$ to be surjective on $k$, and the hint uses the unique inverse Frobenius iterates $\alpha^{p^{-\nu}}$. For example, $k=\mathbb F_p(t)$ in $F=k((\pi))$ is not perfect, so no such $R$ exists. The solution assumes that $k$ is a perfect field of characteristic $p>0$.

## Hints

> [!hint]- Hint 1: Choose roots in the residue field
> Perfectness makes each $\alpha^{p^{-\nu}}$ a well-defined element of $k$.

> [!hint]- Hint 2: Make the lifts Cauchy
> The reductions of $a_{\nu+1}^p$ and $a_\nu$ agree. Apply Exercise 15 to deduce $a_{\nu+1}^{p^{\nu+1}}\equiv a_\nu^{p^\nu}\pmod{\pi^{\nu+1}}$.

> [!hint]- Hint 3: Use the same construction for products
> A product of chosen lifts for $\alpha^{p^{-\nu}}$ and $\beta^{p^{-\nu}}$ lifts $(\alpha\beta)^{p^{-\nu}}$. In characteristic $p$, sums work similarly.

## Solution

> [!success]- Complete derivation under the corrected hypotheses
> Assume that $k$ is perfect of characteristic $p>0$. For $\alpha\in k$ and each integer $\nu\ge0$, choose $a_\nu\in\mathfrak o$ reducing to $\alpha^{p^{-\nu}}$. Set $s_\nu=a_\nu^{p^\nu}$. The reductions of $a_{\nu+1}^p$ and $a_\nu$ are both $\alpha^{p^{-\nu}}$, so Exercise 15, applied with initial exponent $r=1$, gives
>
> $$
> s_{\nu+1}=(a_{\nu+1}^p)^{p^\nu}\equiv a_\nu^{p^\nu}=s_\nu\pmod{\pi^{\nu+1}}.
> $$
>
> Consequently $(s_\nu)$ is $\pi$-adically Cauchy and converges in the complete ring $\mathfrak o$. Denote its limit by $\tau(\alpha)$. Since every $s_\nu$ reduces to $\alpha$, so does $\tau(\alpha)$. If $a_\nu'$ is another choice of lifts, then $a_\nu\equiv a_\nu'\pmod\pi$, and Exercise 15 gives $a_\nu^{p^\nu}\equiv(a_\nu')^{p^\nu}\pmod{\pi^{\nu+1}}$; both choices have the same limit.
>
> The set $R=\tau(k)$ contains exactly one representative of each residue class. Choose lifts $a_\nu,b_\nu$ for $\alpha^{p^{-\nu}},\beta^{p^{-\nu}}$. Their products lift $(\alpha\beta)^{p^{-\nu}}$, so taking limits of $(a_\nu b_\nu)^{p^\nu}=a_\nu^{p^\nu}b_\nu^{p^\nu}$ yields
>
> $$
> \tau(\alpha\beta)=\tau(\alpha)\tau(\beta).
> $$
>
> Likewise, choose lifts $b_\nu$ of $\alpha^{p^{-(\nu+1)}}$. Then $b_\nu^p$ lifts $(\alpha^p)^{p^{-\nu}}$, and the limit construction shows $\tau(\alpha)^p=\tau(\alpha^p)$. Frobenius is bijective on $k$, so $R^p=R$.
>
> To prove uniqueness, let $R'$ be any representative system with $(R')^p=R'$, and write $r_\alpha\in R'$ for the representative of $\alpha$. Since reduction and Frobenius are both bijections on their respective representative sets, $r_\alpha=(r_{\alpha^{p^{-\nu}}})^{p^\nu}$ for every $\nu$. The term on the right is one of the approximants used to define $\tau(\alpha)$, so $r_\alpha=\tau(\alpha)$.
>
> Finally suppose $\operatorname{char}F=p$. For lifts $a_\nu,b_\nu$ as above, $a_\nu+b_\nu$ reduces to $(\alpha+\beta)^{p^{-\nu}}$, because inverse Frobenius is additive on $k$. The characteristic-$p$ identity $(a_\nu+b_\nu)^{p^\nu}=a_\nu^{p^\nu}+b_\nu^{p^\nu}$ and passage to the limit give $\tau(\alpha+\beta)=\tau(\alpha)+\tau(\beta)$. Thus $R$ is a subfield of $F$, and reduction restricts to a field isomorphism $R\cong k$. In mixed characteristic, $R$ remains multiplicatively closed but need not be additively closed.

## Related Concepts

- [[02 - Ring Theory/Exercises/Exercise R295 - Frobenius Improves DVR Congruences|Exercise R295]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Source and proof status:** [S2, Ch. XII, Exercise 16, printed p. 497, PDF p. 512]. The printed omission is identified above. The limit, multiplicativity, uniqueness, and equal-characteristic additivity are independently derived from the corrected Exercise 15.
- **Notation:** $\alpha^{p^{-\nu}}$ means the $\nu$-fold inverse Frobenius image in the perfect residue field; it is not a choice of a complex or algebraic root. The printed hint uses $a_\nu^{p^\nu}$, not $a_\nu^{p^{-\nu}}$.
