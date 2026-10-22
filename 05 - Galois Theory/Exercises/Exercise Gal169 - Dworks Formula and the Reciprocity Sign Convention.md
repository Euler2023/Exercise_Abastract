---
title: 'Exercise Gal169: Dworks Formula and the Reciprocity Sign Convention'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 1, printed p. 298, PDF p. 317
source_refs:
- S4/ch-IV/sec-5/ex-1
created: '2026-10-23'
---

# Exercise Gal169: Dworks Formula and the Reciprocity Sign Convention

## Problem Statement

> [!question] Neukirch IV.5.1
> Let $L|K$ be abelian and totally ramified, and let $\pi$ be a prime element of $A_L$. If then $\sigma\in G(L|K)$ and
> $$
> y^{\varphi-1}=\pi^{\sigma-1}
> $$
> with $y\in U_{\widetilde L}$, then $r_{L|K}(\sigma)=N(y)\bmod N_{L|K}A_L$, where $N=N_{\widetilde L|\widetilde K}$ (B. Dwork, see [122], chap. XIII, §5).

> [!warning] Source issue
> 印刷式的方向与正文 $r(\varphi)=\pi$ 的归一化不一致。下文从正文定义推得 $r(\sigma)=N(y)^{-1}$，并给出保留正号时所需的方程修正；未把印刷公式直接作为已证结论。

## Hints

> [!hint]- Hint 1
> 以正文的 $r(\varphi)=\pi$ 归一化检查方向。取 $\tau=\sigma\varphi$ 的固定域 $E$ 与 prime element $\pi_E$。

> [!hint]- Hint 2
> 令 $u=\pi_E/\pi$。在 $U_{\widetilde L}$ 对 $G(L/K)$ 的 coinvariants 中，$[uy]$ 被 $\varphi$ 固定，可应用正文 (5.4)。

## Solution

> [!success]- Independent derivation
> 沿用正文记号 $\widetilde K$ 为最大 unramified 扩张，$\widetilde L=L\widetilde K$；$\varphi$ 为 $\widetilde L/L$ 的 Frobenius。全分歧和 abelian 性使
> $$
> G(\widetilde L/K)\simeq G(L/K)\times G(\widetilde K/K),
> $$
> 故 $\sigma,\varphi$ 可取为交换的提升。给定方程先说明
> $$
> N(y)^{\varphi-1}=N(\pi^{\sigma-1})=1,
> $$
> 所以 $N(y)\in A_K$，其 residue 类确有意义。
>
> 下面直接按正文 (5.2)、(5.4)、(5.6) 推导，追踪反号。令 $\tau=\sigma\varphi$，$E$ 为其固定域。$d_K(\tau)=1$；正文 (4.5) 给出 $E/K$ 有限、$\widetilde E=\widetilde L$，且 $\tau$ 为 $E$ 的 Frobenius。选 $\pi_E\in A_E$ prime，置 $u=\pi_E/\pi\in U_{\widetilde L}$。因 $\pi_E^\tau=\pi_E$ 且 $\pi^\varphi=\pi$，
> $$
> u^{\tau-1}=\pi^{1-\sigma}=y^{1-\varphi}.
> $$
> 在 $U_{\widetilde L}/I_{G(L/K)}U_{\widetilde L}$ 中 $\sigma$ 作用平凡，所以 $\tau$ 与 $\varphi$ 的作用相同，故 $[uy]^{\varphi-1}=1$。正文已证明的引理 (5.4) 因而给出 $N(uy)\in N_{L/K}A_L$。另一方面，$E\widetilde K=\widetilde L$、$E\cap\widetilde K=K$，所以
> $$
> N(u)=\frac{N_{E/K}(\pi_E)}{N_{L/K}(\pi)}
> \equiv r_{L/K}(\sigma)\pmod{N_{L/K}A_L}.
> $$
> 于是
> $$
> r_{L/K}(\sigma)\equiv N(y)^{-1}\pmod{N_{L/K}A_L}.
> $$
> 这与印刷公式相差一个逆。保持正文 arithmetic Frobenius $r(\varphi)=\pi$ 时，可修正为上式；等价地，若希望保留印刷的 $r(\sigma)=N(y)$，应把条件改为 $y^{\varphi-1}=\pi^{1-\sigma}$。改变整个 reciprocity 的 Frobenius 归一化也会反转结果，但必须同时改变正文定义，不能只在本题默改。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Unramified Extensions and Frobenius]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Coinvariants and Norms]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 1, printed p. 298, PDF p. 317]. 原印刷方程及结论完整保留。上述为按正文已证明引理 (5.4) 和定义 (5.2)/(5.6) 的独立方向审查；引用锚点分别 printed pp. 291–295 / PDF pp. 310–314。原引参考 [122] 未另查，未声称其同样采用本书归一化。
- **Convention:** 若源书在不同位置混用左右作用或 geometric Frobenius，必须显式统一后再引用本题；本解把 $\sigma,\varphi$ 作为本书正文所用的实际 automorphisms 处理。
