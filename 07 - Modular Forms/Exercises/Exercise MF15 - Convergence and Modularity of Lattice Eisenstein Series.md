---
title: "Exercise MF15: Convergence and Modularity of Lattice Eisenstein Series"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.1, Exercise 1.1.4, printed p. 8, PDF p. 23"
source_refs:
  - "S7/ch-1/sec-1/ex-4"
created: 2026-10-24
---

# Exercise MF15: Convergence and Modularity of Lattice Eisenstein Series

## Problem Statement

> [!question] Exercise 1.1.4
> Let $k\geq3$ be an integer and let $L'=\mathbb Z^2-\{(0,0)\}$.
>
> **(a)** Show that the series $\sum_{(c,d)\in L'}(\sup\{|c|,|d|\})^{-k}$ converges by considering the partial sums over expanding squares.
>
> **(b)** Fix positive numbers $A$ and $B$ and let
> $$
> \Omega=\{\tau\in\mathcal H:|\operatorname{Re}\tau|\leq A,\ \operatorname{Im}\tau\geq B\}.
> $$
> Prove that there is a constant $C>0$ such that $|\tau+\delta|>C\sup\{1,|\delta|\}$ for all $\tau\in\Omega$ and $\delta\in\mathbb R$. (Hints for this exercise are at the end of the book.)
>
> **(c)** Use parts (a) and (b) to prove that the series defining $G_k(\tau)$ converges absolutely and uniformly for $\tau\in\Omega$. Conclude that $G_k$ is holomorphic on $\mathcal H$.
>
> **(d)** Show that for $\gamma\in\mathrm{SL}_2(\mathbb Z)$, right multiplication by $\gamma$ defines a bijection from $L'$ to $L'$.
>
> **(e)** Use the calculation from (c) to show that $G_k$ is bounded on $\Omega$. From the text and part (d), $G_k$ is weakly modular so in particular $G_k(\tau+1)=G_k(\tau)$. Show that therefore $G_k(\tau)$ is bounded as $\operatorname{Im}\tau\to\infty$.


## Hints

> [!hint]- Hint 1
> The boundary of the square $\max(|c|,|d|)\leq n$ contains $8n$ integer points.

> [!hint]- Hint 2
> For large $|\delta|$, use $|\tau+\delta|\geq|\operatorname{Re}\tau+\delta|$; for bounded $|\delta|$, use $|\tau+\delta|\geq B$. Then put $\delta=d/c$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The series is $G_k(\tau)=\sum_{(c,d)\in L'}(c\tau+d)^{-k}$ [S7, printed p. 4, PDF p. 19].
>
> **(a)** There are $(2n+1)^2-(2n-1)^2=8n$ pairs with $\max(|c|,|d|)=n$. Thus
> $$
> \sum_{(c,d)\in L'}\max(|c|,|d|)^{-k}
> =8\sum_{n=1}^{\infty}n^{1-k}<\infty
> $$
> because $k>2$.
>
> **(b)** Set $R=2A+2>1$ and $C=\min(1/4,B/(2R))>0$. If $|\delta|\geq R$, then
> $$
> |\tau+\delta|\geq|\operatorname{Re}\tau+\delta|\geq|\delta|-A>|\delta|/2>C\max(1,|\delta|).
> $$
> If $|\delta|<R$, then $|\tau+\delta|\geq B>C\max(1,|\delta|)$ since $C R\leq B/2$.
>
> **(c)** For $c\ne0$, part (b) gives
> $$
> |c\tau+d|=|c|\,|\tau+d/c|>C\max(|c|,|d|).
> $$
> For $c=0$, $|c\tau+d|=|d|$. Therefore with $C_0=\min(1,C)$, every summand has absolute value at most $C_0^{-k}\max(|c|,|d|)^{-k}$, independently of $\tau\in\Omega$. The Weierstrass $M$-test and (a) prove absolute uniform convergence. Each summand is holomorphic on $\mathcal H$, and every compact subset lies in a suitable $\Omega$. The locally uniform limit theorem for holomorphic functions therefore proves that $G_k$ is holomorphic.
>
> **(d)** The matrix $\gamma^{-1}$ has integer entries. The maps $v\mapsto v\gamma$ and $v\mapsto v\gamma^{-1}$ are inverse maps on $\mathbb Z^2$, and neither sends a nonzero row to zero. They restrict to inverse bijections of $L'$.
>
> **(e)** The bound in (c) yields explicitly
> $$
> |G_k(\tau)|\leq8C_0^{-k}\sum_{n\geq1}n^{1-k}\qquad(\tau\in\Omega).
> $$
> Absolute convergence and (d) justify the change of summation variables in
> $$
> G_k(\gamma\tau)=(c\tau+d)^kG_k(\tau).
> $$
> In particular $G_k(\tau+1)=G_k(\tau)$. For every $\tau$ choose an integer $n$ with $|\operatorname{Re}(\tau-n)|\leq1/2$. Apply the displayed bound on the region $A=1/2$, $B=1$ to $\tau-n$ whenever $\operatorname{Im}\tau\geq1$. This gives a bound independent of the real part, proving boundedness at the cusp. Periodicity defines a holomorphic function of $q=e^{2\pi i\tau}$ on the punctured disk; the removable singularity theorem extends it to $q=0$. Thus $G_k$ is a modular form.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]

## Notes

- **Analytic inputs:** The Weierstrass $M$-test, locally uniform limit theorem and removable singularity theorem are imported elementary complex-analysis results.
- **Odd weights:** Pairing $(c,d)$ with $(-c,-d)$ is legitimate by absolute convergence and gives $G_k=0$ when $k$ is odd. The nonzero classical examples have even $k\geq4$.
- **Appendix:** The hints to (b)–(c) were checked at [S7, Appendix A, printed p. 413, PDF p. 424]. The explicit constant above is an independent simplification of the estimate.

- **Source and proof status:** The complete numbered exercise was checked against the original PDF at [S7, Ch. 1, §1.1, Exercise 1.1.4, printed p. 8, PDF p. 23]. The solution is an independent derivation in this vault; named external inputs are identified above.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 1|Diamond–Shurman Chapter 1]]. Learning status remains `not-started`.
